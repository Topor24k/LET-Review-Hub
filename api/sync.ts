import { MongoClient, Db } from "mongodb";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const uri = process.env.MONGODB_URI || "mongodb+srv://kayeencampana_db_user:E1bG4qjkT0h2cyA9@cluster0.8imxhaj.mongodb.net/let_review_db?retryWrites=true&w=majority";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function getDatabase(): Promise<Db> {
  if (cachedDb && cachedClient) {
    return cachedDb;
  }
  const client = new MongoClient(uri, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 8000,
  });
  await client.connect();
  const db = client.db("let_review_db");
  cachedClient = client;
  cachedDb = db;
  return db;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const db = await getDatabase();
    const subjectCollection = db.collection("subject_records");
    const profileCollection = db.collection("user_profile");
    const USER_ID = "hershey_nicolle_tabanao";

    if (req.method === "GET") {
      // 1. Fetch all per-subject records
      const subjectDocs = await subjectCollection.find({}).toArray();

      // 2. Fetch user profile (reader preferences, settings)
      const userProfile: any = (await profileCollection.findOne({ _id: USER_ID as any })) || {};

      // 3. Assemble unified schema for client-side memory store
      const userProgress: Record<string, any> = {};
      const highlights: any[] = [];
      const flashcards: any[] = [];
      const flashcardMastery: string[] = [];
      const paragraphBookmarks: Record<string, string[]> = {};
      const examHistory: Record<string, any[]> = {};
      const examDrafts: Record<string, any> = {};
      const studyPages: Record<string, number> = {};

      for (const doc of subjectDocs) {
        const sid = doc.subjectId || doc._id;
        if (!sid) continue;

        userProgress[sid] = {
          status: doc.status || "NOT_STARTED",
          bookmarked: Boolean(doc.bookmarked),
          userNotes: doc.userNotes || "",
          lastStudied: doc.lastStudied || doc.updatedAt,
        };

        if (Array.isArray(doc.highlights)) {
          highlights.push(...doc.highlights);
        }
        if (Array.isArray(doc.flashcards)) {
          flashcards.push(...doc.flashcards);
        }
        if (Array.isArray(doc.flashcardMastery)) {
          flashcardMastery.push(...doc.flashcardMastery);
        }
        if (Array.isArray(doc.paragraphBookmarks) && doc.paragraphBookmarks.length > 0) {
          paragraphBookmarks[sid] = doc.paragraphBookmarks;
        }
        if (Array.isArray(doc.examAttempts) && doc.examAttempts.length > 0) {
          examHistory[sid] = doc.examAttempts;
        }
        if (doc.activeExamDraft) {
          examDrafts[sid] = doc.activeExamDraft;
        }
        if (typeof doc.lastReadPage === "number") {
          studyPages[sid] = doc.lastReadPage;
        }
      }

      return res.status(200).json({
        userProgress,
        highlights,
        flashcards,
        flashcardMastery: Array.from(new Set(flashcardMastery)),
        paragraphBookmarks,
        examHistory,
        examDrafts,
        studyPages,
        readerSettings: userProfile.readerSettings || { fontSize: "normal", isFocusMode: false },
        lastSyncedAt: userProfile.lastSyncedAt || new Date().toISOString(),
      });
    }

    if (req.method === "POST") {
      let payload = req.body;
      if (typeof payload === "string") {
        try {
          payload = JSON.parse(payload);
        } catch {
          payload = {};
        }
      }
      if (!payload || typeof payload !== "object") {
        payload = {};
      }

      const now = new Date().toISOString();

      // Collect all subject IDs referenced in this update
      const affectedSubjectIds = new Set<string>();

      if (payload.userProgress) {
        Object.keys(payload.userProgress).forEach(sid => affectedSubjectIds.add(sid));
      }
      if (Array.isArray(payload.highlights)) {
        payload.highlights.forEach((hl: any) => {
          if (hl.subjectId) affectedSubjectIds.add(hl.subjectId);
        });
      }
      if (Array.isArray(payload.flashcards)) {
        payload.flashcards.forEach((fc: any) => {
          if (fc.subjectId) affectedSubjectIds.add(fc.subjectId);
        });
      }
      if (payload.paragraphBookmarks) {
        Object.keys(payload.paragraphBookmarks).forEach(sid => affectedSubjectIds.add(sid));
      }
      if (payload.examHistory) {
        Object.keys(payload.examHistory).forEach(sid => affectedSubjectIds.add(sid));
      }
      if (payload.examDrafts) {
        Object.keys(payload.examDrafts).forEach(sid => affectedSubjectIds.add(sid));
      }
      if (payload.studyPages) {
        Object.keys(payload.studyPages).forEach(sid => affectedSubjectIds.add(sid));
      }

      // Update per-subject clean document in subject_records
      for (const sid of affectedSubjectIds) {
        const updateDoc: Record<string, any> = {
          subjectId: sid,
          updatedAt: now,
        };

        if (payload.userProgress && payload.userProgress[sid]) {
          const prog = payload.userProgress[sid];
          if (prog.status !== undefined) updateDoc.status = prog.status;
          if (prog.bookmarked !== undefined) updateDoc.bookmarked = prog.bookmarked;
          if (prog.userNotes !== undefined) updateDoc.userNotes = prog.userNotes;
          if (prog.lastStudied !== undefined) updateDoc.lastStudied = prog.lastStudied;
        }

        if (Array.isArray(payload.highlights)) {
          updateDoc.highlights = payload.highlights.filter((hl: any) => hl.subjectId === sid);
        }

        if (Array.isArray(payload.flashcards)) {
          updateDoc.flashcards = payload.flashcards.filter((fc: any) => fc.subjectId === sid);
        }

        if (Array.isArray(payload.flashcardMastery)) {
          updateDoc.flashcardMastery = payload.flashcardMastery;
        }

        if (payload.paragraphBookmarks && payload.paragraphBookmarks[sid] !== undefined) {
          updateDoc.paragraphBookmarks = payload.paragraphBookmarks[sid];
        }

        if (payload.examHistory && payload.examHistory[sid] !== undefined) {
          updateDoc.examAttempts = payload.examHistory[sid];
        }

        if (payload.examDrafts && payload.examDrafts[sid] !== undefined) {
          updateDoc.activeExamDraft = payload.examDrafts[sid];
        }

        if (payload.studyPages && payload.studyPages[sid] !== undefined) {
          updateDoc.lastReadPage = payload.studyPages[sid];
        }

        await subjectCollection.updateOne(
          { _id: sid as any },
          { $set: updateDoc },
          { upsert: true }
        );
      }

      // Update user profile (reader preferences, settings)
      const profileUpdates: Record<string, any> = {
        fullName: "Hershey Nicolle Tabanao",
        lastSyncedAt: now,
        updatedAt: now,
      };

      if (payload.readerSettings) {
        profileUpdates.readerSettings = payload.readerSettings;
      }

      await profileCollection.updateOne(
        { _id: USER_ID as any },
        { $set: profileUpdates },
        { upsert: true }
      );

      return res.status(200).json({ success: true, timestamp: now });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error: any) {
    console.error("API /api/sync error:", error);
    return res.status(500).json({
      error: error.message || "Database connection error",
      details: error.toString(),
    });
  }
}

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
    const collection = db.collection("user_study_data");
    const PROFILE_ID = "langga_main_study_profile";

    if (req.method === "GET") {
      const doc = await collection.findOne({ _id: PROFILE_ID as any });
      return res.status(200).json(doc || {});
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

      const updateFields: Record<string, any> = {
        lastSyncedAt: new Date().toISOString(),
      };

      const allowedFields = [
        "userProgress",
        "highlights",
        "flashcards",
        "flashcardMastery",
        "paragraphBookmarks",
        "examHistory",
        "examDrafts",
        "studyPages",
        "readerSettings",
      ];

      for (const field of allowedFields) {
        if (payload[field] !== undefined) {
          updateFields[field] = payload[field];
        }
      }

      await collection.updateOne(
        { _id: PROFILE_ID as any },
        { $set: updateFields },
        { upsert: true }
      );

      const updated = await collection.findOne({ _id: PROFILE_ID as any });
      return res.status(200).json({ success: true, data: updated });
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

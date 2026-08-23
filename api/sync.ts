import type { IncomingMessage, ServerResponse } from "http";
import { connectToDatabase } from "./_db.js";

// Helper to parse JSON body
async function getJsonBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
}

// Handler for /api/sync
export default async function handler(req: IncomingMessage & { method?: string; query?: any }, res: ServerResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    res.end();
    return;
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("user_study_data");
    const PROFILE_ID = "langga_main_study_profile";

    if (req.method === "GET") {
      const doc = await collection.findOne({ _id: PROFILE_ID as any });
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(doc || {}));
      return;
    }

    if (req.method === "POST") {
      const payload = await getJsonBody(req);

      const updateFields: Record<string, any> = {
        lastSyncedAt: new Date().toISOString(),
      };

      // Allowed fields to sync
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
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, data: updated }));
      return;
    }

    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed" }));
  } catch (error: any) {
    console.error("API /api/sync error:", error);
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 500;
    res.end(JSON.stringify({ error: error.message || "Internal server error" }));
  }
}

import { MongoClient } from "mongodb";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const uri = process.env.MONGODB_URI || "mongodb+srv://kayeencampana_db_user:E1bG4qjkT0h2cyA9@cluster0.8imxhaj.mongodb.net/let_review_db?retryWrites=true&w=majority";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
    await client.connect();
    const db = client.db("let_review_db");
    const ping = await db.command({ ping: 1 });
    await client.close();

    return res.status(200).json({
      status: "ok",
      database: "let_review_db",
      ping,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: err.message || "Failed to connect to MongoDB",
      details: err.toString(),
    });
  }
}

import 'dotenv/config';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB;
const dbName = process.env.DB_NAME;

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // If we have a cached connection, use it
  if (cachedClient && cachedDb) {
    console.log("Using cached database connection");
    return { client: cachedClient, db: cachedDb };
  }

  // If no cached connection, create a new one
  console.log("Establishing new database connection...");

  try {
    const client = new MongoClient(uri);
    await client.connect();

    // Verify the connection by running a simple command
    await client.db(dbName).command({ ping: 1 });
    console.log("✅ Connected successfully to MongoDB");

    const db = client.db(dbName);

    // Cache the connection
    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("Unable to connect to database");
  }
}
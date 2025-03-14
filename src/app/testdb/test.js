import { connectToDatabase } from '../database/mongodb.js';

async function testConnection() {
  console.log("Testing MongoDB connection...");
  
  try {
    const { client, db } = await connectToDatabase();
    console.log(`Connected to database: ${db.databaseName}`);
    
    // Optional: List collections to further verify
    const collections = await db.listCollections().toArray();
    console.log("Available collections:", collections.map(c => c.name));
    
    // Close the connection when done
    await client.close();
    console.log("Connection closed successfully");
  } catch (error) {
    console.error("Connection test failed:", error);
    process.exit(1);
  }
}

testConnection();
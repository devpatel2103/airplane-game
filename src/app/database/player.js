import {connectToDatabase} from "./mongodb.js"



// Function to fetch a player by username
export async function fetchPlayer(username) {
    const { db } = await connectToDatabase();
    return db.collection('Users').findOne({ username });
}

// Function to create a new player
export async function createPlayer(email, username, password) {
    const { db } = await connectToDatabase();
    return db.collection('Users').insertOne(playerData);
}

// Function to update an existing player's data
export async function updatePlayer(username, updateData) {
    const { db } = await connectToDatabase();
    return db.collection('Users').updateOne(
        { username },   // Find the player by username
        { $set: updateData } // Update the fields
    );
}


import { connectToDatabase } from "./mongodb.js"
import bcrypt from "bcrypt"

// Function to create a new player
export async function createPlayer(email, username, password) {
    const { db } = await connectToDatabase();
    const users = db.collection("User");

    //Check if email and username is being used already
    const existingUsername = await users.findOne({ username })
    if (existingUsername) throw new Error("Username already in use");

    const existingEmail = await users.findOne({ email })
    if (existingEmail) throw new Error("Email already in use");

    //Hash the password
    const hashedPass = await bcrypt.hash(password, 11)

    //Create a new player
    const newPlayer = {
        username,
        password: hashedPass,
        email,
        money: 10000,
        plane_health: 100,
        init_airport: "",
        experience: 0,
        level: 1,
        rank: "Rookie",
        inventory: [],
        achievements: [],
        friends: [],

    }

    const result = await users.insertOne(newPlayer);
    return result.insertedId;
}

// Function to fetch a player by username
export async function fetchPlayer(username) {
    const db = await connectToDatabase();
    return db.collection('Users').findOne({ username });
}

// Function to update an existing player's data
export async function updatePlayer(username, updateData) {
    const db = await connectToDatabase();
    return db.collection('Users').updateOne(
        { username },   // Find the player by username
        { $set: updateData } // Update the fields
    );
}


import { NextResponse } from "next/server";
import { createPlayer } from "../../database/player";

export async function POST(req) {
    try {
        const { email, username, password } = await req.json();

        if (!email || !username || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const userId = await createPlayer(email, username, password);
        return NextResponse.json({ message: "User registered successfully", userId }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

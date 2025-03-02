// Date - 26-11-2024  -  Tuesday


import { connect } from '@/database/dbConnection';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
connect();
// Must call this function to connect database to every page.

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const body = await req.json();
        const { username, email, password } = body;

        // Check if user already exists based on email
        let user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Generate salt and hash password
        const salt = await bcryptjs.genSalt(12);
        const hashPassword = await bcryptjs.hash(password, salt);

        // Create new user
        user = await User.create({
            username,
            email,
            password: hashPassword,
        });

        return NextResponse.json({ message: "User created successfully!" }, { status: 201 });
    } catch (error: any) {
        console.error(error);  // Log error for debugging
        return NextResponse.json(
            { error: 'An error occurred while processing your request.' },
            { status: 500 }  // Internal server error status
        );
    }
}

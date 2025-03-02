// Date - 27-11-2024  -  Wednesday


import { connect } from "@/database/dbConnection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;

        // Find the user by email
        const findUser = await User.findOne({ email });
        if (!findUser) return NextResponse.json({ message: "User Not Found" }, { status: 400 });

        // Compare the password
        const isPasswordValid = await bcryptjs.compare(password, findUser.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid Password" }, { status: 400 });
        }

        // Token data and generation
        const tokenData = {
            id: findUser._id,
            email: findUser.email
        };

        const token = jwt.sign(
            tokenData,
            process.env.JWT_SECRET_TOKEN!,
            { expiresIn: '2d' }
        );

        // Set the token in cookies
        const response = NextResponse.json({ message: "Login Successfully" }, { status: 201 });
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Ensure secure flag in production
            sameSite: 'strict', // Prevent CSRF
        });

        return response;

    } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

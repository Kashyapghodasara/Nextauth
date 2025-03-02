// Date - 27-11-2024  -  Wednesday

import { NextResponse } from "next/server";

export async function GET(){
    try {
        const res = NextResponse.json({
            message: "Logout Successfully",
            success: true,
        },{status: 200})
        res.cookies.set("token", "", {httpOnly: true, expires: new Date(0)})
        return res;
    } catch (error) {
        console.error("Logout error:", error); // ✅ Now it's used
      }
}   

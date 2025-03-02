// Date - 27-11-2024  -  Wednesday

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const res = NextResponse.json({
            message: "Logout Successfully",
            success: true,
        },{status: 200})
        res.cookies.set("token", "", {httpOnly: true, expires: new Date(0)})
        return res;
    } catch (error:any) {
        return NextResponse.json({
            error: "error.message",
            status: 500
        })
    }   
}
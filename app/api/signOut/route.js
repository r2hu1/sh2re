import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request) {
    const options = {
        name: "session",
        value: "",
        maxAge: -1,
    };

    cookies().set(options);
    return NextResponse.json({}, { status: 200 });
}
import { Connect } from "@/app/db/dbConfig";
import Donar from "@/app/model/donerModule";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await Connect();
    const body = await request.json();
    const { name, email, phone, bloodGroup, location } = body;

    // Validate the request body
    if (!name || !email || !phone || !bloodGroup || !location) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    // check if email is already registered
    const existing = await Donar.findOne({ email });
    if (existing) {
        return NextResponse.json({ message: "Email already registered" }, { status: 409 });
    }

    try {
        const donar = new Donar({
            name,
            email,
            phone,
            bloodGroup,
            location,
        });

        await donar.save();
        return NextResponse.json({ message: "Donar added successfully" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error adding donar" }, { status: 500 });
    }
}
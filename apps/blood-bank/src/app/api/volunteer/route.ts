
import { Connect } from "@/app/db/dbConfig";
import Volunteer from "@/app/model/volunteerSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await Connect();
    const body = await request.json();
    const { name, email, phone, answer, location } = body;
    // Validate the request body
    if (!name || !email || !phone || !answer || !location) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    // check if email is already registered
    const existing = await Volunteer.findOne({ email });
        if (existing) {
            return NextResponse.json({ message: "Email already registered" }, { status: 409 });
        }
    try {
        const volunteer = new Volunteer({
            name,
            email,
            phone,
            answer,
            location,
        });
        await volunteer.save();
        return NextResponse.json({ message: "Volunteer added successfully" }, { status: 201 });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error adding volunteer" }, { status: 500 });
    }
}
    


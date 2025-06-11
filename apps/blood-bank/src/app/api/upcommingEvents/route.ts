import { Connect } from "@/app/db/dbConfig";
import UpcomingEvent from "@/app/model/upcommingEventSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await Connect();
    const body = await request.json();
    const { date, location, description, image } = body;

    if (!date || !location || !description || !image) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const existing = await UpcomingEvent.findOne({ date, location });
    if (existing) {
        return NextResponse.json({ message: "Event already exists for this date & location" }, { status: 409 });
    }

    try {
        const event = new UpcomingEvent({
            date,
            location,
            description,
            image,
        });

        await event.save();
        return NextResponse.json({ message: "Event added successfully" }, { status: 201 });
    } catch (error) {
        console.log("Error saving event:", error);
        return NextResponse.json({ message: "Error adding event" }, { status: 500 });
    }
}

export async function GET() {
    await Connect();
    try {
        const events = await UpcomingEvent.find().sort({ createdAt: -1 });
        return NextResponse.json(events, { status: 200 });
    } catch (error) {
        console.log("Error fetching events:", error);
        return NextResponse.json({ message: "Error fetching events" }, { status: 500 });
    }
}

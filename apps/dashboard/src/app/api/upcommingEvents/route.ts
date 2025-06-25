import { Connect } from "@/db/dbConfig";
import UpcomingEvent from "@/model/upcommingEventSchema";
import { NextRequest, NextResponse } from "next/server";

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

export async function PUT(request: NextRequest) {
    await Connect();

    try {
        const { id, date, location, description, image } = await request.json();

        console.log("PUT request body:", { id, date, location, description, image });

        if (!id || !date || !location || !description) {
            return NextResponse.json(
                { error: "ID, date, location, and description are required" },
                { status: 400 }
            );
        }

        const updatedEvent = await UpcomingEvent.findByIdAndUpdate(
            id,
            { date, location, description, image },
            { new: true }
        );

        if (!updatedEvent) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }

        return NextResponse.json(
            { message: "Event updated successfully", event: updatedEvent },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating event:", error);
        return NextResponse.json(
            { error: "Failed to update event" },
            { status: 500 }
        );
    }
}

// ✅ DELETE - Delete event using ID from request body
export async function DELETE(request: NextRequest) {
    await Connect();

    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const deletedEvent = await UpcomingEvent.findByIdAndDelete(id);

        if (!deletedEvent) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }

        return NextResponse.json(
            { message: "Event deleted successfully", event: deletedEvent },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting event:", error);
        return NextResponse.json(
            { error: "Failed to delete event" },
            { status: 500 }
        );
    }
}


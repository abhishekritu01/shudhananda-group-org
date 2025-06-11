import { Connect } from "@/app/db/dbConfig";
import UpcomingEvent from "@/app/model/upcommingEventSchema";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await Connect();
    const body = await request.json();
    const { date, location, description, image } = body;

    if (!date || !location || !description || !image) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        const updated = await UpcomingEvent.findByIdAndUpdate(
            params.id,
            { date, location, description, image },
            { new: true }
        );

        if (!updated) {
            return NextResponse.json({ message: "Event not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Event updated successfully" }, { status: 200 });
    } catch (error) {
        console.log("Error updating event:", error);
        return NextResponse.json({ message: "Error updating event" }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    await Connect();

    try {
        const deleted = await UpcomingEvent.findByIdAndDelete(params.id);
        if (!deleted) {
            return NextResponse.json({ message: "Event not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Event deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log("Error deleting event:", error);
        return NextResponse.json({ message: "Error deleting event" }, { status: 500 });
    }
}

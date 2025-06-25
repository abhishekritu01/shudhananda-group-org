import { Connect } from "@/app/db/dbConfig";
import UpcomingEvent from "@/app/model/upcommingEventSchema";
import { NextResponse } from "next/server";

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
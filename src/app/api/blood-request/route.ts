import { Connect } from "@/db/dbConfig";
import BloodRequest from "@/model/bloodRequest";
import BloodStock from "@/model/bloodStockSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await Connect();
        const requests = await BloodRequest.find().sort({ createdAt: -1 });
        return NextResponse.json(requests);
    } catch (error) {
        console.error("GET Error:", error);
        return NextResponse.json({ error: "Failed to fetch blood requests" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await Connect();
        const body = await request.json();

        const {
            name,
            phone,
            bloodGroup, // now an array of { group: string, units: number }
            state,
            city,
            description,
        } = body;

        // ✅ Validate basic input
        if (
            !name?.trim() ||
            !phone?.trim() ||
            !Array.isArray(bloodGroup) ||
            bloodGroup.length === 0 ||
            !state?.trim() ||
            !city?.trim() ||
            !description?.trim()
        ) {
            return NextResponse.json(
                { message: "All required fields must be filled properly." },
                { status: 400 }
            );
        }

        // ✅ Check and update stock for each group
        for (const { group, units } of bloodGroup) {
            if (!group || !units || isNaN(units) || units <= 0) {
                return NextResponse.json(
                    { message: "Each blood group must include a valid group and units." },
                    { status: 400 }
                );
            }

            const stock = await BloodStock.findOne({ bloodGroup: group });

            if (!stock || stock.units < Number(units)) {
                return NextResponse.json(
                    { message: `Only ${stock?.units ?? 0} unit(s) of ${group} available.` },
                    { status: 400 }
                );
            }
        }

        // ✅ Deduct stock after confirming availability
        for (const { group, units } of bloodGroup) {
            const stock = await BloodStock.findOne({ bloodGroup: group });
            stock.units -= Number(units);
            stock.updatedAt = new Date();
            await stock.save();
        }

        // ✅ Save the request
        const newRequest = new BloodRequest({
            name,
            phone,
            bloodGroup, // saving the array
            units: bloodGroup.reduce((sum, bg) => sum + Number(bg.units), 0), // total units
            state,
            city,
            description,
            seen: false,
        });

        await newRequest.save();

        return NextResponse.json(
            { message: "Request submitted and blood stock updated." },
            { status: 201 }
        );
    } catch (error) {
        console.error("POST Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}


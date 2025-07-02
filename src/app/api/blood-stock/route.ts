import { Connect } from "@/db/dbConfig";
import BloodStock from "@/model/bloodStockSchema";
import { NextRequest, NextResponse } from "next/server";

// ✅ GET - Fetch all blood stock sorted by blood group
export async function GET() {
    await Connect();
    try {
        const stock = await BloodStock.find().sort({ bloodGroup: 1 });
        return NextResponse.json(stock, { status: 200 });
    } catch (error: unknown) {
        console.error("Error fetching stock:", error);
        const message = error instanceof Error ? error.message : "Failed to fetch stock";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

// ✅ POST - Add new stock
export async function POST(request: NextRequest) {
    await Connect();
    try {
        const { bloodGroup, units } = await request.json();

        if (!bloodGroup || units == null) {
            return NextResponse.json(
                { message: "bloodGroup and units are required" },
                { status: 400 }
            );
        }

        const existing = await BloodStock.findOne({ bloodGroup });
        if (existing) {
            return NextResponse.json(
                { message: "Stock already exists for this blood group" },
                { status: 409 }
            );
        }

        const newStock = new BloodStock({ bloodGroup, units });
        await newStock.save();

        return NextResponse.json(
            { message: "Stock added successfully", stock: newStock },
            { status: 201 }
        );
    } catch (error: unknown) {
        console.error("Error adding stock:", error);
        const message = error instanceof Error ? error.message : "Error adding stock";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

// ✅ PUT - Update existing stock by bloodGroup
export async function PUT(request: NextRequest) {
    await Connect();
    try {
        const { bloodGroup, units } = await request.json();

        if (!bloodGroup || typeof units !== "number") {
            return NextResponse.json(
                { message: "bloodGroup and units required" },
                { status: 400 }
            );
        }

        const updated = await BloodStock.findOneAndUpdate(
            { bloodGroup },
            { units, updatedAt: new Date() },
            { new: true }
        );

        if (!updated) {
            return NextResponse.json(
                { message: "Stock not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Stock updated", stock: updated },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.error("Error updating stock:", error);
        const message = error instanceof Error ? error.message : "Error updating stock";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}


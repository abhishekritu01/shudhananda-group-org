import { Connect } from "@/app/db/dbConfig";
import Testimonial from "@/app/model/testimonialSchema";
import { NextResponse } from "next/server";

await Connect();

export async function GET() {
    try {
        const testimonials = await Testimonial.find().lean();
        return NextResponse.json(testimonials);
    }
    catch (error) {
        console.error("Error fetching testimonials:", error);
        return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newTestimonial = await Testimonial.create(data);
        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        console.error("Error creating testimonial:", error);
        return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, ...updateData } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "ID is required for update" }, { status: 400 });
        }

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedTestimonial) {
            return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
        }

        return NextResponse.json(updatedTestimonial, { status: 200 });
    } catch (error) {
        console.error("Error updating testimonial:", error);
        return NextResponse.json({ error: "Failed to update testimonial" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "ID is required for deletion" }, { status: 400 });
        }

        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

        if (!deletedTestimonial) {
            return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Testimonial deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting testimonial:", error);
        return NextResponse.json({ error: "Failed to delete testimonial" }, { status: 500 });
    }
}

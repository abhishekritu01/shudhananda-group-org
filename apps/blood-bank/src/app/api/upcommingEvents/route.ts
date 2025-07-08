import { NextResponse } from 'next/server';
import { Connect } from '@/app/db/dbConfig';
import UpcomingEvent from '@/app/model/upcommingEventSchema';

export async function GET() {
    try {
        await Connect();
        const events = await UpcomingEvent.find();
        return NextResponse.json(events);
    } catch (err: unknown) {
        let errorMessage = 'Unknown error occurred';

        if (err instanceof Error) {
            errorMessage = err.message;
            console.error('❌ Error fetching events:', errorMessage);
        } else {
            console.error('❌ Non-standard error:', err);
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}


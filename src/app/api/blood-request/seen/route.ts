// app/api/blood-request/seen/route.ts

import { NextResponse } from 'next/server';
import { Connect } from '@/db/dbConfig';
import BloodRequest from '@/model/bloodRequest';

export async function POST() {
    try {
        await Connect();

        // ✅ Update all unseen requests to seen
        await BloodRequest.updateMany({ seen: false }, { $set: { seen: true } });

        return NextResponse.json({ message: 'All requests marked as seen' }, { status: 200 });
    } catch (err) {
        console.error('Error marking requests as seen:', err);
        return NextResponse.json({ error: 'Failed to mark as seen' }, { status: 500 });
    }
}


import { NextRequest, NextResponse } from 'next/server';
import { Connect } from '@/db/dbConfig';
import BloodRequest from '@/model/bloodRequest';

export async function GET(req: NextRequest) {
    try {
        await Connect();

        const url = new URL(req.url);
        const id = url.pathname.split('/').pop(); // 👈 extract ID from the URL

        if (!id) {
            return NextResponse.json({ error: 'Missing request ID in URL' }, { status: 400 });
        }

        const request = await BloodRequest.findById(id);

        if (!request) {
            return NextResponse.json({ error: 'Request not found' }, { status: 404 });
        }

        return NextResponse.json(request);
    } catch (err) {
        console.error('GET Error:', err);
        return NextResponse.json({ error: 'Failed to fetch request' }, { status: 500 });
    }
}




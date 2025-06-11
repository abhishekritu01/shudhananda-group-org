import { NextResponse } from 'next/server';
import { Connect } from '@/db/dbConfig';
import Volunteer from '@/model/volunteerSchema';

export async function GET() {
  try {
    await Connect();
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });

    return NextResponse.json(volunteers, { status: 200 });
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    return NextResponse.json(
      { message: 'Error fetching volunteers' },
      { status: 500 }
    );
  }
}

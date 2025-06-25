import { NextResponse } from 'next/server';
import Donar from '@/model/donerModule';
import { Connect } from '@/db/dbConfig';// Your DB connection helper

export async function GET() {
  try {
    // Connect to MongoDB 
    await Connect();

    // Fetch all donors from the database
    const donors = await Donar.find({}).lean();

    return NextResponse.json(donors);
  } catch (error) {
    console.error('Failed to fetch donors:', error);
    return NextResponse.json({ error: 'Failed to fetch donors' }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { getCertificates } from '@/lib/db-prisma';

// GET - Fetch all public certificates (no authentication required)
export async function GET(request: NextRequest) {
  try {
    const certificates = await getCertificates();
    return NextResponse.json(certificates);
  } catch (error) {
    console.error('Error fetching certificates:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
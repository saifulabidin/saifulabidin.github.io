import { NextRequest, NextResponse } from 'next/server';
import { getCertificates } from '@/lib/db-prisma';
import { staticCertificates } from '@/app/constants/certificatesData';

// GET - Fetch all public certificates (no authentication required)
export async function GET(request: NextRequest) {
  try {
    const certificates = await getCertificates();
    if (certificates && certificates.length > 0) {
      return NextResponse.json(certificates);
    }
    return NextResponse.json(staticCertificates);
  } catch (error) {
    return NextResponse.json(staticCertificates);
  }
}
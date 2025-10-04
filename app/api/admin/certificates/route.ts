import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getCertificates, createCertificate } from '@/lib/db-prisma';
import { z } from 'zod';

const certificateSchema = z.object({
  title: z.string().min(1, "Title is required"),
  issuer: z.string().min(1, "Issuer is required"),
  date: z.string().min(4, "Date is required").max(4, "Date must be 4 characters (YYYY)"),
  renewed: z.string().min(4, "Renewal date must be 4 characters (YYYY)").max(4, "Renewal date must be 4 characters (YYYY)").optional(),
  image_url: z.string().url("Invalid image URL"),
  credential_url: z.string().url("Invalid credential URL").optional(),
  sort_order: z.number().default(0),
});

// GET - Fetch all certificates
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const certificates = await getCertificates();
    return NextResponse.json(certificates);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new certificate
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    try {
      const validatedData = certificateSchema.parse(body);
      const certificate = await createCertificate(validatedData);

      if (!certificate) {
        return NextResponse.json({ error: 'Failed to create certificate' }, { status: 500 });
      }

      return NextResponse.json(certificate, { status: 201 });
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return NextResponse.json({
          error: 'Validation failed',
          details: validationError.issues
        }, { status: 400 });
      }
      throw validationError;
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
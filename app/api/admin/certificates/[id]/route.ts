import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getCertificate, updateCertificate, deleteCertificate } from '@/lib/db-prisma';
import { z } from 'zod';

const updateCertificateSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  issuer: z.string().min(1, "Issuer is required").optional(),
  date: z.string().min(4, "Date is required").max(4, "Date must be 4 characters (YYYY)").optional(),
  renewed: z.string().min(4, "Renewal date must be 4 characters (YYYY)").max(4, "Renewal date must be 4 characters (YYYY)").optional().or(z.literal('')),
  image_url: z.string().url("Invalid image URL").optional(),
  credential_url: z.string().url("Invalid credential URL").optional().or(z.literal('')),
  sort_order: z.number().optional(),
});

// GET - Get single certificate
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const certificateId = parseInt(id, 10);

    if (isNaN(certificateId)) {
      return NextResponse.json({ error: 'Invalid certificate ID' }, { status: 400 });
    }

    const certificate = await getCertificate(certificateId);

    if (!certificate) {
      return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    }

    return NextResponse.json(certificate);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update certificate
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const certificateId = parseInt(id, 10);

    if (isNaN(certificateId)) {
      return NextResponse.json({ error: 'Invalid certificate ID' }, { status: 400 });
    }

    const body = await request.json();

    try {
      const validatedData = updateCertificateSchema.parse(body);

      // Convert empty strings to undefined for optional fields
      const processedData = {
        ...validatedData,
        renewed: validatedData.renewed === '' ? undefined : validatedData.renewed,
        credential_url: validatedData.credential_url === '' ? undefined : validatedData.credential_url,
      };

      const certificate = await updateCertificate(certificateId, processedData);

      if (!certificate) {
        return NextResponse.json({ error: 'Certificate not found or update failed' }, { status: 404 });
      }

      return NextResponse.json(certificate);
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

// DELETE - Delete certificate
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const certificateId = parseInt(id, 10);

    if (isNaN(certificateId)) {
      return NextResponse.json({ error: 'Invalid certificate ID' }, { status: 400 });
    }

    const success = await deleteCertificate(certificateId);

    if (!success) {
      return NextResponse.json({ error: 'Certificate not found or deletion failed' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
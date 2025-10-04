import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getProject, updateProject, deleteProject } from '@/lib/db-prisma';
import { z } from 'zod';

const updateProjectSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
  tech_stack: z.array(z.string()).min(1, "At least one technology is required").optional(),
  image_url: z.string().url("Invalid image URL").optional(),
  github_url: z.string().min(1, "GitHub URL is required").optional(),
  live_url: z.string().min(1, "Live URL is required").optional(),
  category: z.enum(["Backend", "Frontend", "API", "Mobile"]).optional(),
  is_private: z.boolean().optional(),
  sort_order: z.number().optional(),
});

// GET - Get single project
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
    const projectId = parseInt(id, 10);

    if (isNaN(projectId)) {
      return NextResponse.json({ error: 'Invalid project ID' }, { status: 400 });
    }

    const project = await getProject(projectId);

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update project
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
    const projectId = parseInt(id, 10);

    if (isNaN(projectId)) {
      return NextResponse.json({ error: 'Invalid project ID' }, { status: 400 });
    }

    const body = await request.json();

    try {
      const validatedData = updateProjectSchema.parse(body);
      const project = await updateProject(projectId, validatedData);

      if (!project) {
        return NextResponse.json({ error: 'Project not found or update failed' }, { status: 404 });
      }

      return NextResponse.json(project);
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

// DELETE - Delete project
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
    const projectId = parseInt(id, 10);

    if (isNaN(projectId)) {
      return NextResponse.json({ error: 'Invalid project ID' }, { status: 400 });
    }

    const success = await deleteProject(projectId);

    if (!success) {
      return NextResponse.json({ error: 'Project not found or deletion failed' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
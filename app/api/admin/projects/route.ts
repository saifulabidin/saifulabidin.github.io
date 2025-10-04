import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getProjects, createProject, updateProject, deleteProject } from '@/lib/db-prisma';
import { z } from 'zod';

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tech_stack: z.array(z.string()).min(1, "At least one technology is required"),
  image_url: z.string().url("Invalid image URL"),
  github_url: z.string().min(1, "GitHub URL is required"),
  live_url: z.string().min(1, "Live URL is required"),
  category: z.enum(["Backend", "Frontend", "API", "Mobile"]),
  is_private: z.boolean().default(false),
  sort_order: z.number().default(0),
});

// GET - Fetch all projects
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new project
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    try {
      const validatedData = projectSchema.parse(body);
      const project = await createProject(validatedData);

      if (!project) {
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
      }

      return NextResponse.json(project, { status: 201 });
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
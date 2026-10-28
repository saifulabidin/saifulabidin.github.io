import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '@/lib/db-prisma';
import { staticProjects } from '@/app/constants/projectsData';

// GET - Fetch all public projects (no authentication required)
export async function GET(request: NextRequest) {
  try {
    const projects = await getProjects();
    if (projects && projects.length > 0) {
      return NextResponse.json(projects);
    }
    return NextResponse.json(staticProjects);
  } catch (error) {
    return NextResponse.json(staticProjects);
  }
}
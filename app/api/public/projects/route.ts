import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '@/lib/db-prisma';

// GET - Fetch all public projects (no authentication required)
export async function GET(request: NextRequest) {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
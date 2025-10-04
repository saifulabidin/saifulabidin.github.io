import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Types for frontend
export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  image_url: string;
  github_url: string;
  live_url: string;
  category: string;
  is_private: boolean;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  renewed?: string | null;
  image_url: string;
  credential_url?: string | null;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
}

// Projects CRUD operations
export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [
        { sort_order: 'asc' },
        { created_at: 'desc' }
      ]
    });
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProject(id: number): Promise<Project | null> {
  try {
    const project = await prisma.project.findUnique({
      where: { id }
    });
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export async function createProject(data: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project | null> {
  try {
    const project = await prisma.project.create({
      data
    });
    return project;
  } catch (error) {
    console.error('Error creating project:', error);
    return null;
  }
}

export async function updateProject(id: number, data: Partial<Project>): Promise<Project | null> {
  try {
    const project = await prisma.project.update({
      where: { id },
      data
    });
    return project;
  } catch (error) {
    console.error('Error updating project:', error);
    return null;
  }
}

export async function deleteProject(id: number): Promise<boolean> {
  try {
    await prisma.project.delete({
      where: { id }
    });
    return true;
  } catch (error) {
    console.error('Error deleting project:', error);
    return false;
  }
}

// Certificates CRUD operations
export async function getCertificates(): Promise<Certificate[]> {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: [
        { sort_order: 'asc' },
        { created_at: 'desc' }
      ]
    });
    return certificates;
  } catch (error) {
    console.error('Error fetching certificates:', error);
    return [];
  }
}

export async function getCertificate(id: number): Promise<Certificate | null> {
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { id }
    });
    return certificate;
  } catch (error) {
    console.error('Error fetching certificate:', error);
    return null;
  }
}

export async function createCertificate(data: Omit<Certificate, 'id' | 'created_at' | 'updated_at'>): Promise<Certificate | null> {
  try {
    const certificate = await prisma.certificate.create({
      data
    });
    return certificate;
  } catch (error) {
    console.error('Error creating certificate:', error);
    return null;
  }
}

export async function updateCertificate(id: number, data: Partial<Certificate>): Promise<Certificate | null> {
  try {
    const certificate = await prisma.certificate.update({
      where: { id },
      data
    });
    return certificate;
  } catch (error) {
    console.error('Error updating certificate:', error);
    return null;
  }
}

export async function deleteCertificate(id: number): Promise<boolean> {
  try {
    await prisma.certificate.delete({
      where: { id }
    });
    return true;
  } catch (error) {
    console.error('Error deleting certificate:', error);
    return false;
  }
}
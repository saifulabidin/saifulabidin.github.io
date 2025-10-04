/**
 * Admin Panel Types
 * TypeScript interfaces for admin components
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  image_url: string;
  github_url: string;
  live_url: string;
  category: "Backend" | "Frontend" | "API" | "Mobile";
  is_private: boolean;
  sort_order: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credential_id?: string;
  credential_url?: string;
  image_url: string;
  description?: string;
  sort_order: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface ProjectFormData {
  title: string;
  description: string;
  tech_stack: string[];
  image_url: string;
  github_url: string;
  live_url: string;
  category: "Backend" | "Frontend" | "API" | "Mobile";
  is_private: boolean;
  sort_order: number;
}

export interface CertificateFormData {
  title: string;
  issuer: string;
  date: string;
  credential_id?: string;
  credential_url?: string;
  image_url: string;
  description?: string;
  sort_order: number;
}

export interface MessageType {
  type: 'success' | 'error' | 'info' | 'warning';
  text: string;
}

export interface UploadResponse {
  url: string;
  filename: string;
  size: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export type TabType = 'projects' | 'certificates';

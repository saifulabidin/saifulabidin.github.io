/**
 * Admin Panel Utilities
 * Helper functions for admin operations
 */

import type { ApiResponse } from './types';

/**
 * API helper for making requests
 */
export async function apiRequest<T = any>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Request failed',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate image URL
 */
export function isValidImageUrl(url: string): boolean {
  if (!url) return false;
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const urlLower = url.toLowerCase();
  
  return imageExtensions.some(ext => urlLower.includes(ext)) || 
         url.startsWith('data:image/') ||
         url.startsWith('https://');
}

/**
 * Format file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Truncate text
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

/**
 * Format date
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Validate form data
 */
export function validateProjectForm(data: any): string | null {
  if (!data.title || data.title.trim().length < 3) {
    return 'Title must be at least 3 characters';
  }
  
  if (!data.description || data.description.trim().length < 10) {
    return 'Description must be at least 10 characters';
  }
  
  if (!data.tech_stack || data.tech_stack.length === 0) {
    return 'At least one technology is required';
  }
  
  if (!data.image_url || !isValidImageUrl(data.image_url)) {
    return 'Valid image URL is required';
  }
  
  if (data.github_url && data.github_url !== '#private-repository' && !isValidUrl(data.github_url)) {
    return 'Invalid GitHub URL';
  }
  
  if (data.live_url && data.live_url !== '#company-internal' && !isValidUrl(data.live_url)) {
    return 'Invalid Live URL';
  }
  
  return null;
}

/**
 * Validate certificate form
 */
export function validateCertificateForm(data: any): string | null {
  if (!data.title || data.title.trim().length < 3) {
    return 'Title must be at least 3 characters';
  }
  
  if (!data.issuer || data.issuer.trim().length < 3) {
    return 'Issuer must be at least 3 characters';
  }
  
  if (!data.date) {
    return 'Date is required';
  }
  
  if (!data.image_url || !isValidImageUrl(data.image_url)) {
    return 'Valid image URL is required';
  }
  
  if (data.credential_url && !isValidUrl(data.credential_url)) {
    return 'Invalid credential URL';
  }
  
  return null;
}

/**
 * Generate unique ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Sort items by sort_order
 */
export function sortByOrder<T extends { sort_order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.sort_order - b.sort_order);
}

/**
 * Safe JSON parse
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

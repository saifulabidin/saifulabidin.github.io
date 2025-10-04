import { useState, useEffect, useCallback, useRef } from 'react';
import { Project, Certificate } from '@/lib/db-prisma';
import { MessageType } from '@/app/components/admin';

// ✅ Cache keys for sessionStorage
const CACHE_KEY_FLAG = 'admin_data_fetched';
const CACHE_KEY_PROJECTS = 'admin_data_projects';
const CACHE_KEY_CERTIFICATES = 'admin_data_certificates';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Helper to check if cache is valid
function isCacheValid(): boolean {
  if (typeof window === 'undefined') return false;
  
  const cached = sessionStorage.getItem(CACHE_KEY_FLAG);
  if (!cached) return false;
  
  const { timestamp } = JSON.parse(cached);
  return Date.now() - timestamp < CACHE_DURATION;
}

// Helper to get cached data
function getCachedData(): { projects: Project[]; certificates: Certificate[] } | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const projectsStr = sessionStorage.getItem(CACHE_KEY_PROJECTS);
    const certificatesStr = sessionStorage.getItem(CACHE_KEY_CERTIFICATES);
    
    if (!projectsStr || !certificatesStr) return null;
    
    return {
      projects: JSON.parse(projectsStr),
      certificates: JSON.parse(certificatesStr),
    };
  } catch {
    return null;
  }
}

// Helper to set cache
function setCache(projects: Project[], certificates: Certificate[]) {
  if (typeof window === 'undefined') return;
  
  sessionStorage.setItem(CACHE_KEY_FLAG, JSON.stringify({ timestamp: Date.now() }));
  sessionStorage.setItem(CACHE_KEY_PROJECTS, JSON.stringify(projects));
  sessionStorage.setItem(CACHE_KEY_CERTIFICATES, JSON.stringify(certificates));
}

export function useAdminData(
  status: string,
  showMessage: (text: string, type: MessageType['type']) => void
) {
  // Initialize with cached data if available
  const cachedData = getCachedData();
  const [projects, setProjects] = useState<Project[]>(cachedData?.projects || []);
  const [certificates, setCertificates] = useState<Certificate[]>(cachedData?.certificates || []);
  const [loading, setLoading] = useState(!isCacheValid());

  const fetchData = useCallback(async () => {
    // Check cache validity
    const cacheValid = isCacheValid();
    
    if (cacheValid) {
      const cached = getCachedData();
      if (cached) {
        setProjects(cached.projects);
        setCertificates(cached.certificates);
        setLoading(false);
      }
      return;
    }

    try {
      const [projectsRes, certificatesRes] = await Promise.all([
        fetch('/api/admin/projects'),
        fetch('/api/admin/certificates'),
      ]);

      const projectsData = await projectsRes.json();
      const certificatesData = await certificatesRes.json();

      // Update state and cache
      setProjects(projectsData);
      setCertificates(certificatesData);
      setCache(projectsData, certificatesData);
    } catch (error) {
      showMessage('Error fetching data', 'error');
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps - uses sessionStorage

  useEffect(() => {
    if (status === 'authenticated') {
      fetchData();
    }
  }, [status, fetchData]);

  // Force refresh function for manual calls (CRUD operations)
  const refreshData = useCallback(async () => {
    // Clear cache to force refetch
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(CACHE_KEY_FLAG);
    }
    await fetchData();
  }, [fetchData]);

  return { projects, certificates, loading, fetchData: refreshData };
}

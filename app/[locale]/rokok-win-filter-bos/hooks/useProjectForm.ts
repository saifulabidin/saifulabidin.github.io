import { useState } from 'react';
import { Project } from '@/lib/db-prisma';
import { MessageType } from '@/app/components/admin';

interface ProjectForm {
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

export function useProjectForm(
  showMessage: (text: string, type: MessageType['type']) => void,
  fetchData: () => void
) {
  const [projectForm, setProjectForm] = useState<ProjectForm>({
    title: '',
    description: '',
    tech_stack: [],
    image_url: '',
    github_url: '#private-repository',
    live_url: '#company-internal',
    category: 'Backend',
    is_private: true,
    sort_order: 0,
  });

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [techInput, setTechInput] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleProjectFormChange = (field: string, value: any) => {
    setProjectForm(prev => ({ ...prev, [field]: value }));
  };

  const addTech = () => {
    if (techInput.trim() && !projectForm.tech_stack.includes(techInput.trim())) {
      setProjectForm(prev => ({
        ...prev,
        tech_stack: [...prev.tech_stack, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const removeTech = (tech: string) => {
    setProjectForm(prev => ({
      ...prev,
      tech_stack: prev.tech_stack.filter(t => t !== tech)
    }));
  };

  const handleFileUpload = async (file: File, folder: string = 'images') => {
    if (!file) return null;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    try {
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      showMessage('Failed to upload image', 'error');
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleProjectImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await handleFileUpload(file, 'project');
      if (url) {
        setProjectForm(prev => ({ ...prev, image_url: url }));
      }
    }
  };

  const resetProjectForm = () => {
    setProjectForm({
      title: '',
      description: '',
      tech_stack: [],
      image_url: '',
      github_url: '#private-repository',
      live_url: '#company-internal',
      category: 'Backend',
      is_private: true,
      sort_order: 0,
    });
    setTechInput('');
    setEditingProject(null);
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingProject
        ? `/api/admin/projects/${editingProject.id}`
        : '/api/admin/projects';

      const method = editingProject ? 'PUT' : 'POST';

      // Prepare data with proper type conversion
      const submitData = {
        ...projectForm,
        sort_order: typeof projectForm.sort_order === 'number' && !isNaN(projectForm.sort_order) 
          ? projectForm.sort_order 
          : 0,
      };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        showMessage(editingProject ? 'Project updated successfully' : 'Project created successfully', 'success');
        resetProjectForm();
        fetchData();
      } else {
        const error = await response.json();
        showMessage(error.error || 'Failed to save project', 'error');
      }
    } catch (error) {
      showMessage('Failed to save project', 'error');
    }
  };

  const editProject = (project: Project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description,
      tech_stack: project.tech_stack,
      image_url: project.image_url,
      github_url: project.github_url,
      live_url: project.live_url,
      category: project.category as "Backend" | "Frontend" | "API" | "Mobile",
      is_private: project.is_private,
      sort_order: project.sort_order,
    });
    setTechInput('');
  };

  const deleteProject = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        showMessage('Project deleted successfully', 'success');
        fetchData();
      } else {
        showMessage('Failed to delete project', 'error');
      }
    } catch (error) {
      showMessage('Failed to delete project', 'error');
    }
  };

  return {
    projectForm,
    techInput,
    uploading,
    editingProject,
    handleProjectFormChange,
    setTechInput,
    addTech,
    removeTech,
    handleProjectImageUpload,
    handleProjectSubmit,
    editProject,
    deleteProject,
    resetProjectForm,
  };
}

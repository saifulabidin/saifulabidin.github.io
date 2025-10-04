'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Project, Certificate } from "@/lib/db-prisma";

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

interface CertificateForm {
  title: string;
  issuer: string;
  date: string;
  renewed: string;
  image_url: string;
  credential_url: string;
  sort_order: number;
}

export default function AdminPanel() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form states
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

  const [certificateForm, setCertificateForm] = useState<CertificateForm>({
    title: '',
    issuer: '',
    date: '',
    renewed: '',
    image_url: '',
    credential_url: '',
    sort_order: 0,
  });

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [techInput, setTechInput] = useState('');
  const [uploading, setUploading] = useState(false);

  // Fetch data function
  const fetchData = useCallback(async () => {
    try {
      const [projectsRes, certificatesRes] = await Promise.all([
        fetch('/api/admin/projects'),
        fetch('/api/admin/certificates'),
      ]);

      const projectsData = await projectsRes.json();
      const certificatesData = await certificatesRes.json();

      setProjects(projectsData);
      setCertificates(certificatesData);
    } catch (error) {
      showMessage('Error fetching data', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch data on mount
  useEffect(() => {
    if (status === 'authenticated') {
      fetchData();
    }
  }, [status, fetchData]);

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  // File upload
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

  // Project functions
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

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectForm),
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

  // Certificate functions
  const resetCertificateForm = () => {
    setCertificateForm({
      title: '',
      issuer: '',
      date: '',
      renewed: '',
      image_url: '',
      credential_url: '',
      sort_order: 0,
    });
    setEditingCertificate(null);
  };

  const handleCertificateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingCertificate
        ? `/api/admin/certificates/${editingCertificate.id}`
        : '/api/admin/certificates';

      const method = editingCertificate ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(certificateForm),
      });

      if (response.ok) {
        showMessage(editingCertificate ? 'Certificate updated successfully' : 'Certificate created successfully', 'success');
        resetCertificateForm();
        fetchData();
      } else {
        const error = await response.json();
        showMessage(error.error || 'Failed to save certificate', 'error');
      }
    } catch (error) {
      showMessage('Failed to save certificate', 'error');
    }
  };

  const editCertificate = (certificate: Certificate) => {
    setEditingCertificate(certificate);
    setCertificateForm({
      title: certificate.title,
      issuer: certificate.issuer,
      date: certificate.date,
      renewed: certificate.renewed || '',
      image_url: certificate.image_url,
      credential_url: certificate.credential_url || '',
      sort_order: certificate.sort_order,
    });
  };

  const deleteCertificate = async (id: number) => {
    if (!confirm('Are you sure you want to delete this certificate?')) return;

    try {
      const response = await fetch(`/api/admin/certificates/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        showMessage('Certificate deleted successfully', 'success');
        fetchData();
      } else {
        showMessage('Failed to delete certificate', 'error');
      }
    } catch (error) {
      showMessage('Failed to delete certificate', 'error');
    }
  };

  // Tech stack helpers
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

  // Image upload helpers
  const handleProjectImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await handleFileUpload(file, 'project');
      if (url) {
        setProjectForm(prev => ({ ...prev, image_url: url }));
      }
    }
  };

  const handleCertificateImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await handleFileUpload(file, 'certificate');
      if (url) {
        setCertificateForm(prev => ({ ...prev, image_url: url }));
      }
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#19222D] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#19222D] flex items-center justify-center">
        <div className="bg-[#20293A] p-8 rounded-lg shadow-xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Admin Panel</h1>
          <p className="text-gray-300 mb-6 text-center">Sign in with GitHub to access the admin panel</p>
          <button
            onClick={() => signIn('github')}
            className="w-full bg-[#C6F10E] text-black py-3 px-4 rounded-md font-medium hover:bg-[#C6F10E]/90 transition-colors flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Sign in with GitHub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#19222D]">
      {/* Header */}
      <header className="bg-[#20293A] border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Welcome, {session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Message */}
      {message && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-md shadow-lg z-50 ${
          message.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white`}>
          {message.text}
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'projects'
                ? 'bg-[#C6F10E] text-black'
                : 'bg-[#20293A] text-gray-300 hover:text-white'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'certificates'
                ? 'bg-[#C6F10E] text-black'
                : 'bg-[#20293A] text-gray-300 hover:text-white'
            }`}
          >
            Certificates
          </button>
        </div>

        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : (
          <>
            {activeTab === 'projects' ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Form */}
                <div className="bg-[#20293A] rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
                  </h2>
                  <form onSubmit={handleProjectSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Title</label>
                      <input
                        type="text"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Description</label>
                      <textarea
                        value={projectForm.description}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none h-32"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Tech Stack</label>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={techInput}
                          onChange={(e) => setTechInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                          className="flex-1 px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                          placeholder="Enter technology"
                        />
                        <button
                          type="button"
                          onClick={addTech}
                          className="bg-[#C6F10E] text-black px-4 py-2 rounded-md hover:bg-[#C6F10E]/90"
                        >
                          Add
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {projectForm.tech_stack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-[#19222D] text-[#C6F10E] px-3 py-1 rounded-full text-sm flex items-center gap-1"
                          >
                            {tech}
                            <button
                              type="button"
                              onClick={() => removeTech(tech)}
                              className="text-red-400 hover:text-red-300"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Image</label>
                      <input
                        type="file"
                        onChange={handleProjectImageUpload}
                        accept="image/*"
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#C6F10E] file:text-black hover:file:bg-[#C6F10E]/90"
                      />
                      {projectForm.image_url && (
                        <Image
                          src={projectForm.image_url}
                          alt="Preview"
                          width={200}
                          height={128}
                          className="mt-2 h-32 w-full object-cover rounded-md"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Category</label>
                      <select
                        value={projectForm.category}
                        onChange={(e) => setProjectForm(prev => ({
                          ...prev,
                          category: e.target.value as ProjectForm['category']
                        }))}
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                      >
                        <option value="Backend">Backend</option>
                        <option value="Frontend">Frontend</option>
                        <option value="API">API</option>
                        <option value="Mobile">Mobile</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">GitHub URL</label>
                        <input
                          type="text"
                          value={projectForm.github_url}
                          onChange={(e) => setProjectForm(prev => ({ ...prev, github_url: e.target.value }))}
                          className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Live URL</label>
                        <input
                          type="text"
                          value={projectForm.live_url}
                          onChange={(e) => setProjectForm(prev => ({ ...prev, live_url: e.target.value }))}
                          className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="is_private"
                        checked={projectForm.is_private}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, is_private: e.target.checked }))}
                        className="w-4 h-4 bg-[#19222D] border-gray-600 rounded focus:ring-[#C6F10E]"
                      />
                      <label htmlFor="is_private" className="text-gray-300">Private Project</label>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Sort Order</label>
                      <input
                        type="number"
                        value={projectForm.sort_order}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, sort_order: parseInt(e.target.value) }))}
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        disabled={uploading}
                        className="flex-1 bg-[#C6F10E] text-black py-2 px-4 rounded-md hover:bg-[#C6F10E]/90 transition-colors disabled:opacity-50"
                      >
                        {uploading ? 'Uploading...' : (editingProject ? 'Update' : 'Create')}
                      </button>
                      {editingProject && (
                        <button
                          type="button"
                          onClick={resetProjectForm}
                          className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* Projects List */}
                <div className="bg-[#20293A] rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Projects ({projects.length})</h2>
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {projects.map((project) => (
                      <div key={project.id} className="bg-[#19222D] rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{project.title}</h3>
                          <div className="flex gap-2">
                            <button
                              onClick={() => editProject(project)}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteProject(project.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                        <div className="flex gap-2 mb-2">
                          <span className="text-xs bg-[#C6F10E]/20 text-[#C6F10E] px-2 py-1 rounded">
                            {project.category}
                          </span>
                          {project.is_private && (
                            <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded">
                              Private
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.tech_stack.map((tech) => (
                            <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Certificate Form */}
                <div className="bg-[#20293A] rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    {editingCertificate ? 'Edit Certificate' : 'Add New Certificate'}
                  </h2>
                  <form onSubmit={handleCertificateSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Title</label>
                      <input
                        type="text"
                        value={certificateForm.title}
                        onChange={(e) => setCertificateForm(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Issuer</label>
                      <input
                        type="text"
                        value={certificateForm.issuer}
                        onChange={(e) => setCertificateForm(prev => ({ ...prev, issuer: e.target.value }))}
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Issue Year</label>
                        <input
                          type="text"
                          value={certificateForm.date}
                          onChange={(e) => setCertificateForm(prev => ({ ...prev, date: e.target.value }))}
                          className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                          placeholder="2024"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Renewal Year (optional)</label>
                        <input
                          type="text"
                          value={certificateForm.renewed}
                          onChange={(e) => setCertificateForm(prev => ({ ...prev, renewed: e.target.value }))}
                          className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                          placeholder="2025"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Image</label>
                      <input
                        type="file"
                        onChange={handleCertificateImageUpload}
                        accept="image/*"
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#C6F10E] file:text-black hover:file:bg-[#C6F10E]/90"
                      />
                      {certificateForm.image_url && (
                        <Image
                          src={certificateForm.image_url}
                          alt="Preview"
                          width={200}
                          height={128}
                          className="mt-2 h-32 w-full object-cover rounded-md"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Credential URL (optional)</label>
                      <input
                        type="text"
                        value={certificateForm.credential_url}
                        onChange={(e) => setCertificateForm(prev => ({ ...prev, credential_url: e.target.value }))}
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                        placeholder="https://..."
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Sort Order</label>
                      <input
                        type="number"
                        value={certificateForm.sort_order}
                        onChange={(e) => setCertificateForm(prev => ({ ...prev, sort_order: parseInt(e.target.value) }))}
                        className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        disabled={uploading}
                        className="flex-1 bg-[#C6F10E] text-black py-2 px-4 rounded-md hover:bg-[#C6F10E]/90 transition-colors disabled:opacity-50"
                      >
                        {uploading ? 'Uploading...' : (editingCertificate ? 'Update' : 'Create')}
                      </button>
                      {editingCertificate && (
                        <button
                          type="button"
                          onClick={resetCertificateForm}
                          className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* Certificates List */}
                <div className="bg-[#20293A] rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Certificates ({certificates.length})</h2>
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {certificates.map((certificate) => (
                      <div key={certificate.id} className="bg-[#19222D] rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{certificate.title}</h3>
                          <div className="flex gap-2">
                            <button
                              onClick={() => editCertificate(certificate)}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteCertificate(certificate.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <p className="text-[#C6F10E] text-sm mb-1">{certificate.issuer}</p>
                        <div className="text-gray-400 text-sm">
                          Issued: {certificate.date}
                          {certificate.renewed && (
                            <>
                              <span className="text-gray-600 mx-1">•</span>
                              <span className="text-[#C6F10E]">Renewed: {certificate.renewed}</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
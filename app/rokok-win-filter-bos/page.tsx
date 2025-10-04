'use client';

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useCallback } from "react";
import { AdminAuth, Message, MessageType } from "@/app/components/admin";
import { ProjectFormComponent } from "./components/ProjectFormComponent";
import { CertificateFormComponent } from "./components/CertificateFormComponent";
import { ProjectsList } from "./components/ProjectsList";
import { CertificatesList } from "./components/CertificatesList";
import { useAdminData } from "./hooks/useAdminData";
import { useProjectForm } from "./hooks/useProjectForm";
import { useCertificateForm } from "./hooks/useCertificateForm";

export default function AdminPanel() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates'>('projects');
  const [message, setMessage] = useState<MessageType | null>(null);

  // Component lifecycle tracking removed for production

  // Memoize showMessage to prevent unnecessary re-renders
  const showMessage = useCallback((text: string, type: MessageType['type']) => {
    setMessage({ text, type });
  }, []);

  // Data fetching
  const { projects, certificates, loading, fetchData } = useAdminData(status, showMessage);

  // Project form management
  const {
    projectForm,
    techInput,
    uploading: projectUploading,
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
  } = useProjectForm(showMessage, fetchData);

  // Certificate form management
  const {
    certificateForm,
    uploading: certificateUploading,
    editingCertificate,
    handleCertificateFormChange,
    handleCertificateImageUpload,
    handleCertificateSubmit,
    editCertificate,
    deleteCertificate,
    resetCertificateForm,
  } = useCertificateForm(showMessage, fetchData);

  // Auth check - pass session to avoid double useSession() call
  if (status === 'loading' || !session) {
    return <AdminAuth session={session} status={status} />;
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

      {/* Message Toast */}
      <Message message={message} onClose={() => setMessage(null)} />

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
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#C6F10E]"></div>
            <p className="mt-4 text-white">Loading...</p>
          </div>
        ) : (
          <>
            {activeTab === 'projects' ? (
              <div className="grid lg:grid-cols-2 gap-8 lg:items-start">
                <ProjectFormComponent
                  form={projectForm}
                  techInput={techInput}
                  uploading={projectUploading}
                  editing={!!editingProject}
                  onFormChange={handleProjectFormChange}
                  onTechInputChange={setTechInput}
                  onAddTech={addTech}
                  onRemoveTech={removeTech}
                  onImageUpload={handleProjectImageUpload}
                  onSubmit={handleProjectSubmit}
                  onCancel={resetProjectForm}
                />
                <ProjectsList
                  projects={projects}
                  onEdit={editProject}
                  onDelete={deleteProject}
                />
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8 lg:items-start">
                <CertificateFormComponent
                  form={certificateForm}
                  uploading={certificateUploading}
                  editing={!!editingCertificate}
                  onFormChange={handleCertificateFormChange}
                  onImageUpload={handleCertificateImageUpload}
                  onSubmit={handleCertificateSubmit}
                  onCancel={resetCertificateForm}
                />
                <CertificatesList
                  certificates={certificates}
                  onEdit={editCertificate}
                  onDelete={deleteCertificate}
                />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

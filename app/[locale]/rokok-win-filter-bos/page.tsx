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
    <div className="min-h-screen bg-[#FAFAFA] text-black neo-grid-bg">
      {/* Header */}
      <header className="bg-white border-b-2 border-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="inline-block bg-[#FFDE59] border-2 border-black px-3.5 py-1 rounded-xl font-black text-xl text-black shadow-neo-sm">
            Admin Management Console
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-sm text-neutral-800">Operator: {session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-[#FF90E8] text-black font-black text-sm px-4 py-2 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
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
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2.5 rounded-xl font-black text-sm border-2 border-black transition-all cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-[#C6F10E] text-black shadow-neo'
                : 'bg-white text-black shadow-neo-sm hover:bg-[#FFDE59]'
            }`}
          >
            Projects Catalog
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-6 py-2.5 rounded-xl font-black text-sm border-2 border-black transition-all cursor-pointer ${
              activeTab === 'certificates'
                ? 'bg-[#C6F10E] text-black shadow-neo'
                : 'bg-white text-black shadow-neo-sm hover:bg-[#FFDE59]'
            }`}
          >
            Certificates Catalog
          </button>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block bg-white border-2 border-black p-6 rounded-2xl shadow-neo-md font-black text-lg">
              Loading administration assets...
            </div>
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

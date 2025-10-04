import { useState } from 'react';
import { Certificate } from '@/lib/db-prisma';
import { MessageType } from '@/app/components/admin';

interface CertificateForm {
  title: string;
  issuer: string;
  date: string;
  renewed: string;
  image_url: string;
  credential_url: string;
  sort_order: number;
}

export function useCertificateForm(
  showMessage: (text: string, type: MessageType['type']) => void,
  fetchData: () => void
) {
  const [certificateForm, setCertificateForm] = useState<CertificateForm>({
    title: '',
    issuer: '',
    date: '',
    renewed: '',
    image_url: '',
    credential_url: '',
    sort_order: 0,
  });

  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleCertificateFormChange = (field: string, value: any) => {
    setCertificateForm(prev => ({ ...prev, [field]: value }));
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

  const handleCertificateImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await handleFileUpload(file, 'certificate');
      if (url) {
        setCertificateForm(prev => ({ ...prev, image_url: url }));
      }
    }
  };

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

  return {
    certificateForm,
    uploading,
    editingCertificate,
    handleCertificateFormChange,
    handleCertificateImageUpload,
    handleCertificateSubmit,
    editCertificate,
    deleteCertificate,
    resetCertificateForm,
  };
}

import Image from "next/image";

interface CertificateFormProps {
  form: {
    title: string;
    issuer: string;
    date: string;
    renewed: string;
    image_url: string;
    credential_url: string;
    sort_order: number;
  };
  uploading: boolean;
  editing: boolean;
  onFormChange: (field: string, value: any) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export function CertificateFormComponent({
  form,
  uploading,
  editing,
  onFormChange,
  onImageUpload,
  onSubmit,
  onCancel,
}: CertificateFormProps) {
  return (
    <div className="bg-[#20293A] rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        {editing ? 'Edit Certificate' : 'Add New Certificate'}
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => onFormChange('title', e.target.value)}
            className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Issuer</label>
          <input
            type="text"
            value={form.issuer}
            onChange={(e) => onFormChange('issuer', e.target.value)}
            className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">Issue Year</label>
            <input
              type="text"
              value={form.date}
              onChange={(e) => onFormChange('date', e.target.value)}
              className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
              placeholder="2024"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Renewal Year (optional)</label>
            <input
              type="text"
              value={form.renewed}
              onChange={(e) => onFormChange('renewed', e.target.value)}
              className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
              placeholder="2025"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Image</label>
          <input
            type="file"
            onChange={onImageUpload}
            accept="image/*"
            className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#C6F10E] file:text-black hover:file:bg-[#C6F10E]/90"
          />
          {form.image_url && (
            <Image
              src={form.image_url}
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
            value={form.credential_url}
            onChange={(e) => onFormChange('credential_url', e.target.value)}
            className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Sort Order</label>
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => onFormChange('sort_order', parseInt(e.target.value))}
            className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={uploading}
            className="flex-1 bg-[#C6F10E] text-black py-2 px-4 rounded-md hover:bg-[#C6F10E]/90 transition-colors disabled:opacity-50"
          >
            {uploading ? 'Uploading...' : (editing ? 'Update' : 'Create')}
          </button>
          {editing && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

import Image from "next/image";

interface ProjectFormProps {
  form: {
    title: string;
    description: string;
    tech_stack: string[];
    image_url: string;
    github_url: string;
    live_url: string;
    category: "Backend" | "Frontend" | "API" | "Mobile";
    is_private: boolean;
    sort_order: number;
  };
  techInput: string;
  uploading: boolean;
  editing: boolean;
  onFormChange: (field: string, value: any) => void;
  onTechInputChange: (value: string) => void;
  onAddTech: () => void;
  onRemoveTech: (tech: string) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export function ProjectFormComponent({
  form,
  techInput,
  uploading,
  editing,
  onFormChange,
  onTechInputChange,
  onAddTech,
  onRemoveTech,
  onImageUpload,
  onSubmit,
  onCancel,
}: ProjectFormProps) {
  return (
    <div className="bg-[#20293A] rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        {editing ? 'Edit Project' : 'Add New Project'}
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Title */}
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

        {/* Description */}
        <div>
          <label className="block text-gray-300 mb-2">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => onFormChange('description', e.target.value)}
            className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none h-32"
            required
          />
        </div>

        {/* Tech Stack */}
        <div>
          <label className="block text-gray-300 mb-2">Tech Stack</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={techInput}
              onChange={(e) => onTechInputChange(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), onAddTech())}
              className="flex-1 px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
              placeholder="Enter technology"
            />
            <button
              type="button"
              onClick={onAddTech}
              className="bg-[#C6F10E] text-black px-4 py-2 rounded-md hover:bg-[#C6F10E]/90"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {form.tech_stack.map((tech) => (
              <span
                key={tech}
                className="bg-[#19222D] text-[#C6F10E] px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => onRemoveTech(tech)}
                  className="text-red-400 hover:text-red-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
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

        {/* Category */}
        <div>
          <label className="block text-gray-300 mb-2">Category</label>
          <select
            value={form.category}
            onChange={(e) => onFormChange('category', e.target.value)}
            className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
          >
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="API">API</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        {/* URLs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">GitHub URL</label>
            <input
              type="text"
              value={form.github_url}
              onChange={(e) => onFormChange('github_url', e.target.value)}
              className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Live URL</label>
            <input
              type="text"
              value={form.live_url}
              onChange={(e) => onFormChange('live_url', e.target.value)}
              className="w-full px-4 py-2 bg-[#19222D] border border-gray-600 rounded-md text-white focus:border-[#C6F10E] focus:outline-none"
            />
          </div>
        </div>

        {/* Settings */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="is_private"
            checked={form.is_private}
            onChange={(e) => onFormChange('is_private', e.target.checked)}
            className="w-4 h-4 bg-[#19222D] border-gray-600 rounded focus:ring-[#C6F10E]"
          />
          <label htmlFor="is_private" className="text-gray-300">Private Project</label>
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

        {/* Buttons */}
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

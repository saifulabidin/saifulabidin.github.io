import { Project } from "@/lib/db-prisma";

interface ProjectsListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

export function ProjectsList({ projects, onEdit, onDelete }: ProjectsListProps) {
  return (
    <div className="bg-[#20293A] rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Projects ({projects.length})
      </h2>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#19222D] rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-white">{project.title}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(project)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(project.id)}
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
  );
}

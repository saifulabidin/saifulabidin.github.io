import { Certificate } from "@/lib/db-prisma";

interface CertificatesListProps {
  certificates: Certificate[];
  onEdit: (certificate: Certificate) => void;
  onDelete: (id: number) => void;
}

export function CertificatesList({ certificates, onEdit, onDelete }: CertificatesListProps) {
  return (
    <div className="bg-[#20293A] rounded-lg p-6 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-white mb-6">
        Certificates ({certificates.length})
      </h2>
      <div className="space-y-4 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="bg-[#19222D] rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-white">{certificate.title}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(certificate)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(certificate.id)}
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
  );
}

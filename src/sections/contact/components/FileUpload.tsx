import { ChangeEvent } from "react";
import { ArchiveRestore } from 'lucide-react';

interface FileUploadProps {
  label: string;
  onFileSelect: (file: File | null) => void;
}

export function FileUpload({ label, onFileSelect }: FileUploadProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect(file);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-base font-semibold text-gray-200">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex-1 cursor-pointer rounded-md border-2 border-gray-300 px-3 py-2 
          text-sm text-gray-700 hover:border-fuchsia-600 bg-gray-100"
        >
          Seleccione un archivo
        </label>

        <button
          type="button"
          className="flex items-center gap-2 rounded-md bg-fuchsia-500 px-3 py-2 
                    text-sm text-gray-100 hover:bg-fuchsia-600"
        >
          <ArchiveRestore className="w-5 h-5" />
          <span>Subir archivo</span>
        </button>

      </div>
    </div>
  );
}

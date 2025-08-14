import { ChangeEvent } from "react";

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
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex-1 cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:border-blue-500"
        >
          Seleccione un archivo
        </label>
        <button
          type="button"
          className="rounded-md bg-gray-200 px-3 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          Subir
        </button>
      </div>
    </div>
  );
}

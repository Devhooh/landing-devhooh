"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Select } from "@/components/ui/Select";
import { FileUpload } from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/Button";
import { Hourglass, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado", { file });
  };

  return (
    <div className="w-full rounded-2xl bg-green-100 p-6 shadow-lg">
      {/* Encabezado */}
      <div className="mb-6 text-gray-800 text-center">
        <p className="font-bold flex items-center justify-center gap-2 mb-2">
          <Hourglass className="w-5 h-5 text-green-700" />
          Respuesta en menos de 24h
        </p>
        <p className="font-semibold flex items-center justify-center gap-2 mt-1">
          <CheckCircle className="w-5 h-5 text-green-700" />
          Sin compromiso
        </p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input label="Nombre completo" id="nombre" name="nombre" required />
        <Input type="email" label="Email" id="email" name="email" required />

        {/* Teléfono */}
        <div className="flex gap-2">
          <Select label="País" id="pais" name="pais" required>
            <option value="bo">Bolivia</option>
            <option value="ar">Argentina</option>
            <option value="cl">Chile</option>
            <option value="pe">Perú</option>
          </Select>
          <Input
            type="tel"
            label="Número de Teléfono"
            id="telefono"
            name="telefono"
            required
          />
        </div>

        <Input label="Empresa (Opcional)" id="empresa" name="empresa" />
        <Input label="País" id="country" name="country" />

        {/* File Upload */}
        <FileUpload
          label="Adjuntar un archivo (opcional)"
          onFileSelect={setFile}
        />
        {file && (
          <p className="text-sm text-gray-600">
            Archivo seleccionado: <span className="font-medium">{file.name}</span>
          </p>
        )}

        {/* TextArea */}
        <TextArea
          label="Cuéntanos más sobre tu proyecto"
          id="proyecto"
          name="proyecto"
          rows={5}
        />

        {/* Botón */}
        <div className="mt-4">
          <Button type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}

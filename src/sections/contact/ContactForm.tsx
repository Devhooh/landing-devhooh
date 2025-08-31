"use client";

import { useState } from "react";
import { Select } from "@/sections/contact/components/Select";
import { FileUpload } from "@/sections/contact/components/FileUpload";
import { Hourglass, CheckCircle } from "lucide-react";
import InputForm from "./components/InputForm";

export function ContactForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado", { file });
  };

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-indigo-800 via-indigo-900 to-gray-950 text-white p-6 shadow-lg">
      {/* Encabezado */}
      <div className="mb-6 text-center">
        <p className="font-bold flex items-center justify-center gap-2 mb-2">
          <Hourglass className="w-5 h-5 text-green-400" />
          Respuesta en menos de 24h
        </p>
        <p className="font-bold flex items-center justify-center gap-2 mt-1">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Sin compromiso
        </p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Nombre: */}
        <InputForm
          nameHtmlFor="nombre"
          title="Nombre completo"
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Ej. Pablo Pérez"
        />

        {/* Email: */}

        <InputForm
          nameHtmlFor="email"
          title="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Example@gmail.com"
        />

        {/* Teléfono */}
        <div className="flex flex-col md-tablet:flex-row gap-3">
          <Select label="País" id="pais" name="pais" required>
            <option value="bo">Bolivia</option>
            <option value="ar">Argentina</option>
            <option value="cl">Chile</option>
            <option value="pe">Perú</option>
          </Select>
          
          <div className="md-tablet:flex-1">
            <InputForm
              nameHtmlFor="numero"
              title="Número de Teléfono"
              id="numero"
              name="numero"
              type="tel"
              placeholder="+591 77776666"
            />
          </div>
        </div>

        {/* Empresa: */}
        <InputForm
          nameHtmlFor="empresa"
          title="Empresa (Opcional)"
          id="empresa"
          name="empresa"
          type="text"
          placeholder="Ej. Software Company"
        />

        {/* Pais: */}
        <InputForm
          nameHtmlFor="location"
          title="País"
          id="location"
          name="location"
          type="text"
          placeholder="Ej. Mexico"
        />

        {/* Subir archivo */}
        <FileUpload
          label="Adjuntar un archivo (opcional)"
          onFileSelect={setFile}
        />
        {file && (
          <p className="text-sm font-semibold text-gray-200">
            Archivo seleccionado: <span className="font-medium">{file.name}</span>
          </p>
        )}

        {/* Descripcion: */}
        <div className="flex flex-col">
          <label htmlFor="descripcion" className="text-base font-semibold text-gray-200 mb-1">
            Cuéntanos más sobre tu proyecto
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows={3}
            className="rounded-xl border border-gray-700 bg-gray-100 px-4 py-3 text-black
              placeholder-gray-500 focus:border-fuchsia-500 focus:ring-2 
              focus:ring-fuchsia-500/50 outline-none transition"
            required
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="
          w-full py-4 font-semibold rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600
        text-white shadow-md hover:scale-[1.02] hover:shadow-lg 
          transition-all duration-300"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

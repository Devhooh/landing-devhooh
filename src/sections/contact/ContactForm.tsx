"use client";

import { useState } from "react";
import { Select } from "@/sections/contact/components/Select";
import { FileUpload } from "@/sections/contact/components/FileUpload";
import { Clock, Shield, Send, Sparkles } from "lucide-react";
import InputForm from "./components/InputForm";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export function ContactForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado", { file });
  };

  return (
    <div className="relative">
      <div
        className="relative z-10 w-full rounded-3xl bg-colorPrimario6 text-white p-6 md-tablet:p-8 table-lg:p-10 shadow-[0_0_50px_rgba(103,61,230,0.3)] border border-colorPrimario5/20 backdrop-blur-sm"
      >
        {/* Encabezado mejorado */}
        <div className="mb-10 text-center">
          {/* Título principal */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.4}}
          >
            <h2 className="text-2xl md-tablet:text-3xl font-extrabold mb-6">
              Comencemos tu proyecto
            </h2>
          </InViewAnimationWrapper>

          {/* Badges de confianza */}
          <StaggerListContainer className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              {icon: Clock, text: "Respuesta en 24h"},
              {icon: Shield, text: "Sin compromiso"},
            ].map((value, index) => (
              <StaggerListItemClient 
                key={index} 
                index={index}
                delayBase={0.5}
                direction="y"
                offset={30}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-colorDarkFondo1/50 border border-colorPrimario5/30 backdrop-blur-sm"
              >
                <value.icon className="w-4 h-4 text-white" />
                <p className="text-sm font-semibold text-colorHover5">
                  {value.text}
                </p>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>

          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.6}}
          >
            <p className="text-colorHover5 text-sm md-tablet:text-base max-w-md mx-auto leading-relaxed">
              Cuéntanos sobre tu idea y te ayudaremos a convertirla en una solución digital exitosa
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Formulario mejorado ============================================*/}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <StaggerListContainer
            className="space-y-6" 
          >
            {/* Nombre */}
            <StaggerListItemClient
              index={1}
              direction="x"
              offset={20}
            >
              <InputForm
              nameHtmlFor="nombre"
              title="Nombre completo"
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ej. Pablo Pérez"
            />
            </StaggerListItemClient>

            {/* Email */}
            <StaggerListItemClient
              index={2}
              direction="x"
              offset={20}
            >
              <InputForm
              nameHtmlFor="email"
              title="Email"
              id="email"
              name="email"
              type="email"
              placeholder="ejemplo@gmail.com"
            />
            </StaggerListItemClient>

            {/* Teléfono mejorado */}
            <StaggerListItemClient
              index={3}
              direction="x"
              offset={20}
              className="grid grid-cols-1 md-tablet:grid-cols-3 gap-4"
            >
              <Select label="País" id="pais" name="pais" required>
                <option value="bo">🇧🇴 Bolivia</option>
                <option value="ar">🇦🇷 Argentina</option>
                <option value="cl">🇨🇱 Chile</option>
                <option value="pe">🇵🇪 Perú</option>
              </Select>
              
              <div className="md-tablet:col-span-2">
                <InputForm
                  nameHtmlFor="numero"
                  title="Número de WhatsApp"
                  id="numero"
                  name="numero"
                  type="tel"
                  placeholder="+591 77776666"
                />
              </div>
            </StaggerListItemClient>

              {/* Empresa */}
            <StaggerListItemClient
              index={4}
              direction="x"
              offset={20}
            >
              <InputForm
                nameHtmlFor="empresa"
                title="Empresa (Opcional)"
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Ej. Mi Startup SRL"
              />
            </StaggerListItemClient>

            {/* Ubicación */}
            <StaggerListItemClient
              index={5}
              direction="x"
              offset={20}
            >
              <InputForm
                nameHtmlFor="location"
                title="Ciudad/Ubicación"
                id="location"
                name="location"
                type="text"
                placeholder="Ej. Santa Cruz, Bolivia"
              />
            </StaggerListItemClient>

            {/* Tipo de proyecto */}
            <StaggerListItemClient
              index={6}
              direction="x"
              offset={20}
            >
              <Select label="Tipo de proyecto" id="proyecto" name="proyecto" required>
                <option value="">Selecciona una opción</option>
                <option value="web">Página Web / Landing Page</option>
                <option value="ecommerce">Tienda Online / E-commerce</option>
                <option value="app">Aplicación Móvil</option>
                <option value="software">Software a medida</option>
                <option value="ia">Solución con IA</option>
                <option value="otro">Otro proyecto</option>
              </Select>
            </StaggerListItemClient>

            {/* Subir archivo mejorado */}
            <StaggerListItemClient
              index={7}
              direction="x"
              offset={20}
            >
              <FileUpload
                label="Adjuntar documentos (opcional)"
                onFileSelect={setFile}
              />
              {file && (
                <div className="mt-3 p-3 rounded-xl bg-colorPrimario5/10 border border-colorPrimario5/20">
                  <p className="text-sm font-semibold text-colorHover5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-colorPrimario5" />
                    Archivo seleccionado: <span className="text-colorPrimario5">{file.name}</span>
                  </p>
                </div>
              )}
            </StaggerListItemClient>

            {/* Descripción mejorada */}
            <StaggerListItemClient
              index={8}
              direction="x"
              offset={20}
            >
              <label
                htmlFor="descripcion"
                className="block text-base font-semibold text-colorHover5"
              >
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={4}
                className="w-full rounded-xl border-2 border-colorHover4/30 bg-colorHover5/95 px-4 py-3 text-colorPrimario2 placeholder-colorPrimario1/50 focus:border-colorPrimario5 focus:ring-4 focus:ring-colorPrimario5/20 outline-none transition-all duration-300 resize-none"
                placeholder="Describe tu idea, objetivos, funcionalidades que necesitas, presupuesto estimado, tiempos, etc. Mientras más detalles, mejor podremos ayudarte..."
                required
              />
            </StaggerListItemClient>

            {/* Botón mejorado */}
            <StaggerListItemClient
              index={9}
              direction="x"
              offset={20}
            >
              <button
                type="submit"
                className="
                  group relative w-full py-4 px-8 font-bold text-lg rounded-2xl bg-colorDarkFondo1 
                  text-white shadow-[0_0_25px_rgba(103,61,230,0.4)] hover:shadow-[0_0_35px_rgba(103,61,230,0.6)] 
                  transition-all duration-300 overflow-hidden hover:scale-[1.05] active:scale-[0.98] transform"
              >
                {/* Efecto de brillo */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div> */}
                
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Enviar proyecto
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </StaggerListItemClient>

            {/* Nota de privacidad */}
            <StaggerListItemClient
              index={10}
              direction="x"
              offset={20}
            >
              <p className="text-xs text-colorHover5/70 text-center leading-relaxed mt-4">
                Al enviar este formulario aceptas que podamos contactarte para discutir tu proyecto. 
                Tus datos están protegidos y no serán compartidos con terceros.
              </p>
            </StaggerListItemClient>
          </StaggerListContainer>
        </form>
      </div>
    </div>
  );
}
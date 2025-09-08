
"use client";

import { useState } from "react";
import { Select } from "@/sections/contact/components/Select";
import { FileUpload } from "@/sections/contact/components/FileUpload";
import { Clock, Shield, Send, Sparkles } from "lucide-react";
import InputForm from "./components/InputForm";
import { motion } from "framer-motion";

export function ContactForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado", { file });
  };

  const splitText = (text: string) => text.split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      {/* Efectos decorativos de fondo */}
      {/* <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-colorPrimario5/10 blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-colorSecundario1/10 blur-2xl"></div> */}

      <motion.div
        className="relative z-10 w-full rounded-3xl bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 text-white p-8 md-tablet:p-10 shadow-[0_0_50px_rgba(103,61,230,0.3)] border border-colorPrimario5/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* Encabezado mejorado */}
        <div className="mb-10 text-center">
          {/* Título principal */}
          <motion.h3
            className="text-2xl md-tablet:text-3xl font-extrabold mb-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {splitText("Comencemos tu ").map((letter, idx) => (
              <motion.span
                key={idx}
                className="text-white"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
            {splitText("proyecto").map((letter, idx) => (
              <motion.span
                key={idx + 100}
                className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h3>

          {/* Badges de confianza */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-colorPrimario5" />
              <span className="text-sm font-semibold text-colorHover5">
                Respuesta en 24h
              </span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-colorSecundario1/20 border border-colorSecundario1/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-colorSecundario1" />
              <span className="text-sm font-semibold text-colorHover5">
                Sin compromiso
              </span>
            </div>
          </motion.div>

          <motion.p
            className="text-colorHover5 text-sm md-tablet:text-base max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Cuéntanos sobre tu idea y te ayudaremos a convertirla en una solución digital exitosa
          </motion.p>
        </div>

        {/* Formulario mejorado */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={formVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Nombre */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InputForm
              nameHtmlFor="nombre"
              title="Nombre completo"
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ej. Pablo Pérez"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InputForm
              nameHtmlFor="email"
              title="Email"
              id="email"
              name="email"
              type="email"
              placeholder="ejemplo@gmail.com"
            />
          </motion.div>

          {/* Teléfono mejorado */}
          <motion.div
            className="grid grid-cols-1 md-tablet:grid-cols-3 gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
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
          </motion.div>

          {/* Empresa */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <InputForm
              nameHtmlFor="empresa"
              title="Empresa (Opcional)"
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Ej. Mi Startup SRL"
            />
          </motion.div>

          {/* Ubicación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <InputForm
              nameHtmlFor="location"
              title="Ciudad/Ubicación"
              id="location"
              name="location"
              type="text"
              placeholder="Ej. Santa Cruz, Bolivia"
            />
          </motion.div>

          {/* Tipo de proyecto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
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
          </motion.div>

          {/* Subir archivo mejorado */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
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
          </motion.div>

          {/* Descripción mejorada */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
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
          </motion.div>

          {/* Botón mejorado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="submit"
              className="group relative w-full py-4 px-8 font-bold text-lg rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white shadow-[0_0_25px_rgba(103,61,230,0.4)] hover:shadow-[0_0_35px_rgba(103,61,230,0.6)] transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Efecto de brillo */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div> */}
              
              <span className="relative z-10 flex items-center justify-center gap-3">
                Enviar proyecto
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Nota de privacidad */}
          <motion.p
            className="text-xs text-colorHover5/70 text-center leading-relaxed mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Al enviar este formulario aceptas que podamos contactarte para discutir tu proyecto. 
            Tus datos están protegidos y no serán compartidos con terceros.
          </motion.p>
        </motion.form>
      </motion.div>
    </div>
  );
}
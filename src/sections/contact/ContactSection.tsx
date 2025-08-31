import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="w-full px-6 pt-6 pb-12 bg-white">
      {/* Título */}
      <h2 className="
        text-2xl md-tablet:text-4xl font-bold text-center mb-8 
        bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-blue-600">
        ¡Comienza a Trabajar Con Nosotros!
      </h2>
      
      <div
        className="
          mx-auto max-w-6xl 
          grid gap-10
          tablet-md:grid-cols-2
        "
      >
        
        {/* Columna izquierda */}
        <div className="flex flex-col justify-start">
          <ContactInfo />
        </div>

        {/* Columna derecha */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

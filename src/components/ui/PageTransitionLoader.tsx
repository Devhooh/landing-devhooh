"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageTransitionLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // loading al montar la app (inicio)
    const timer = setTimeout(() => setLoading(false), 1000); // 2s de carga inicial
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // loading cada vez que cambia la ruta
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // 1.2s entre páginas
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700">
          <Image
            src="/assets/images/noBgBlack.png"
            alt="Cargando-Devhoo..."
            width={200}
            height={100}
            style={{ height: "auto", width: "auto" }}
            className="animate-pulse"
          />
        </div>
      )}
      {children}
    </>
  );
}

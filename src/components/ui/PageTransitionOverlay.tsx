"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageTransitionOverlay() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false; // Ignora la carga inicial
      return;
    }

    // Mostrar overlay en cambios de ruta
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key={pathname}
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src="/assets/images/noBgBlack.png"
            alt="Cargando Devhoo..."
            width={200}
            height={67} // Proporcional al original
            priority
            className="animate-pulse h-auto w-auto"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
"use client";
import React, { useRef, useEffect, useState } from 'react';

interface AnimateOnVisibleProps {
  children: React.ReactNode;
  className?: string;
  animationClass: string; 
  delay?: number; 
}

export function AnimateOnVisible({ children, className, animationClass, delay = 0 }: AnimateOnVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Capturamos el valor de ref.current en una variable local.
    const currentElement = ref.current;
    
    // Si no hay elemento, salimos
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento está visible y aún no hemos animado, lo marcamos
        if (entry.isIntersecting && !isVisible) {
            // Aplicamos un retraso si se define el stagger
            setTimeout(() => {
                setIsVisible(true);
            }, delay * 1000); 
            // Deja de observar una vez que se activa
            observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } 
    );

    // 2. Observamos el valor local fijo
    observer.observe(currentElement);

    return () => {
      // 3. Usamos el valor local fijo en la limpieza
      observer.unobserve(currentElement);
    };
    // NOTA: isVisible aún debe estar en las dependencias para que el efecto se re-ejecute si cambia.
  }, [delay, isVisible]); 

  // Aplicamos la animación solo si es visible
  const finalClass = `${className || ''} ${isVisible ? animationClass : ''}`;

  return (
    <div ref={ref} className={finalClass}>
      {children}
    </div>
  );
}
"use client"

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react";

interface CtaButtonProps extends React.PropsWithChildren {
  href: string;
  className: string;
}

export default function ButtonCta({
  href,
  className,
  children,
}: CtaButtonProps) {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    setIsLoading(true);
    setTimeout(() => {
        router.push(href);
    }, 100);
  };

  const disabledClasses = isLoading ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
  const baseClasses = "relative transition-all duration-300";

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${className} ${disabledClasses}`}
      onClick={handleClick}
    >
      <span className={`${isLoading ? 'invisible' : ''} inline-block`}>
        {children}
      </span>

      {isLoading && (
        <span 
          className="absolute inset-0 flex items-center justify-center"
        >
          <Loader2 className="w-5 h-5 animate-spin" />
        </span>
      )}
    </Link>
  );
}

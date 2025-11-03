import Link from "next/link";
import React from "react";

interface CtaButtonProps extends React.PropsWithChildren {
  href: string;
  className: string;
  icon?: React.ElementType;
}

export default function ButtonCta({
  href,
  className,
  children,
  icon: Icon,
}: CtaButtonProps) {
  return <Link href={href} passHref>
    <button
      className={`${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5 ml-1 flex-shrink-0"/>}
    </button>
  </Link>
}
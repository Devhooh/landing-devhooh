"use client";

import React from 'react';
import { IconType } from "react-icons";

import { DiDjango } from "react-icons/di";
import { PiFigmaLogoFill } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

import { 
  FaJsSquare, FaNode, FaReact, FaAngular, FaPython,
  FaSwift, FaJava, FaGitAlt, FaGithub, FaDocker, FaAws
} from "react-icons/fa";


import { 
  SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiVite, SiNestjs, SiMysql, SiPostgresql, SiKotlin, 
  SiFlutter, SiVercel, SiKubernetes, SiExpress,
  SiDotnet,
  SiCplusplus,
  SiRust,
  SiAdobexd,
  SiTensorflow,
  SiOpenai,
  SiFastapi,
  SiFlask,
} from "react-icons/si";

// 1. Mapeo de la clave de texto a la función del componente
const IconMap: { [key: string]: IconType } = {
  FaJsSquare, FaNode, FaReact, FaAngular, FaPython,
  FaSwift, FaJava, FaGitAlt, FaGithub, FaDocker, FaAws,
  SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiVite, SiNestjs, SiMysql, SiPostgresql, SiKotlin, 
  SiFlutter, SiVercel, SiKubernetes, SiExpress, SiDotnet,
  SiCplusplus, SiRust, SiAdobexd, SiTensorflow, SiOpenai, SiFastapi,
  SiFlask, DiDjango, PiFigmaLogoFill, BiLogoPostgresql, TbBrandReactNative
};

interface TechIconProps {
  iconKey: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ iconKey, className }) => {
  const IconComponent = IconMap[iconKey];

  if (!IconComponent) {
    return <div className="w-full h-full bg-gray-200" title="Ícono no encontrado">?</div>; 
  }

  return <IconComponent className={className} />;
};
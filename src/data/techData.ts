interface Technology {
  name: string;
  iconKey: string;
  color: string;
  slug: string;
}

export const frontendTech: Technology[] = [
  { iconKey: "FaJsSquare", name: "JavaScript", color: "text-yellow-400", slug: "javascript" },
  { iconKey: "SiTypescript", name: "TypeScript", color: "text-blue-600", slug: "typescript" },
  { iconKey: "SiTailwindcss", name: "TailwindCSS", color: "text-sky-500", slug: "tailwindcss" },
  { iconKey: "SiNextdotjs", name: "Next.js", color: "text-gray-900", slug: "nextjs" },
  { iconKey: "FaAngular", name: "Angular", color: "text-red-600", slug: "angular" },
  { iconKey: "FaReact", name: "React", color: "text-cyan-400", slug: "react" },
];

export const backendTech: Technology[] = [
  { iconKey: "FaNode", name: "NodeJs", color: "text-green-400", slug:"" },
  { iconKey: "SiMysql", name: "MySQL", color: "text-sky-500", slug:"" },
  { iconKey: "SiMongodb", name: "MongoDB", color: "text-green-600", slug:"" },
  { iconKey: "SiNestjs", name: "NestJs", color: "text-red-600", slug:"" },
  { iconKey: "BiLogoPostgresql", name: "PostgreSQL", color: "text-blue-600", slug:"" },
  { iconKey: "SiExpress", name: "ExpressJs", color: "text-gray-700", slug:"" },
];

export const iaTech: Technology[] = [
  { iconKey: "SiTensorflow", name: "TensorFlow", color: "text-orange-500", slug: "tensorflow" },
  { iconKey: "SiOpenai", name: "OpenAI GPT", color: "text-green-500", slug: "openai-gpt" },
  { iconKey: "SiFastapi", name: "FastAPI", color: "text-teal-500", slug: "fastapi" },
  { iconKey: "SiFlask", name: "Flask", color: "text-gray-700", slug: "flask" },
];

export const mobilTech = [
  { iconKey: "SiKotlin", name: "Kotlin", color: "text-fuchsia-500", slug:"" },
  { iconKey: "SiFlutter", name: "Flutter", color: "text-sky-500", slug:"" },
  { iconKey: "TbBrandReactNative", name: "ReactNative", color: "text-blue-600", slug:"" },
];

export const softwareTech = [
  { iconKey: "FaPython", name: "Python", color: "text-blue-600", slug:"" },
  { iconKey: "FaJava", name: "Java", color: "text-blue-800", slug:"" },
  { iconKey: "DiDjango", name: "Django", color: "text-green-800", slug:"" },
];

export const infraTech = [
  { iconKey: "FaDocker", name: "Docker", color: "text-sky-400", slug:"" },
  { iconKey: "SiKubernetes", name: "Kubernetes", color: "text-blue-800", slug:"" },
  { iconKey: "FaGithub", name: "Github", color: "text-black-800", slug:"" },
  { iconKey: "FaGitAlt", name: "Git", color: "text-red-500", slug:"" },
  { iconKey: "SiVercel", name: "Vercel", color: "text-black-800", slug:"" },
  { iconKey: "SiVite", name: "Vite", color: "text-purple-500", slug:"" },
];
export const designerTech = [
  { iconKey: "PiFigmaLogoFill", name: "Figma", color: "text-gray-700", slug:"" },
  { iconKey: "SiAdobexd", name: "Adobexd", color: "text-fuchsia-900", slug:"" },
];
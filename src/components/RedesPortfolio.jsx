import { FileText, Github, Linkedin, FolderOpen } from "lucide-react";

const redes = [
  {
    href: "/cv.pdf", // Cambia por el path real de tu CV
    label: "CV",
    icon: FileText,
  },
  {
    href: "https://github.com/tuusuario", // Cambia por tu github real
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/tuusuario", // Cambia por tu LinkedIn real
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "#proyectos", // O la sección/proyecto real
    label: "Proyectos",
    icon: FolderOpen,
  },
];

export default function RedesPortfolio() {
  return (
    <div className="flex gap-5 mt-8">
      {redes.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className="group flex flex-col items-center text-white hover:text-[#9f00ff] transition"
        >
          <Icon className="w-8 h-8 mb-1 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#9f00ff]" />
          <span className="text-xs font-semibold">{label}</span>
        </a>
      ))}
    </div>
  );
}

import { FileText, Github, Linkedin, FolderOpen, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  {
    href: "/cv.pdf", // Cambia por tu archivo real
    label: "CV",
    icon: FileText,
  },
  {
    href: "https://github.com/tuusuario",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/tuusuario",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "#proyectos",
    label: "Proyectos",
    icon: FolderOpen,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex flex-col items-center">
      <div className="flex items-center gap-2 md:gap-5">
        {/* Hamburguesa en móvil */}
        <button
          className="md:hidden p-2 rounded hover:bg-[#23006e]/40 transition"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7 text-white" />
        </button>
        {/* Menú desktop */}
        <div className="hidden md:flex gap-8">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              title={label}
              className="group flex flex-col items-center text-white hover:text-[#9f00ff] transition"
            >
              <Icon className="w-6 h-6 mb-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#9f00ff]" />
              <span className="text-xs font-semibold">{label}</span>
            </a>
          ))}
        </div>
      </div>
      {/* Menú móvil (dropdown) */}
      {open && (
        <div className="mt-4 bg-[#23006e] bg-opacity-95 rounded-lg shadow-xl flex flex-col gap-2 px-6 py-4 md:hidden">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              title={label}
              className="group flex items-center gap-2 text-white hover:text-[#9f00ff] transition py-1"
              onClick={() => setOpen(false)}
            >
              <Icon className="w-6 h-6 group-hover:scale-110" />
              <span className="text-sm font-semibold">{label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

import { FileText, Github, Linkedin, FolderOpen } from "lucide-react";

const links = [
  {
    href: "/cv.pdf", // Cambia por tu archivo real
    label: "CV",
    icon: FileText,
  },
  {
    href: "https://github.com/mar10devv",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/martin-martinez-02a482244/",
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
  return (
    <nav className="w-full flex flex-col items-center">
      <div className="flex items-center gap-5">
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
    </nav>
  );
}

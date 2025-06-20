import { useState } from "react";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiNodedotjs, SiKotlin, SiGithub, SiGit, SiAstro } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";

// Tecnologías con detalles personalizados
const tecnologias = [
  {
    nombre: "JavaScript",
    icono: <SiJavascript className="text-yellow-400" />,
    detalle: {
      cuando: "Desde 2022",
      proyectos: [
        { nombre: "BookFree", descripcion: "Automatización y lógica para generar catálogos y recomendaciones." },
        { nombre: "Portfolio", descripcion: "Animaciones y scripts interactivos en Astro/React." },
      ],
      como: "Frontend, automatización y lógica de apps web.",
    },
  },
  {
    nombre: "React",
    icono: <SiReact className="text-cyan-400" />,
    detalle: {
      cuando: "Desde 2023",
      proyectos: [
        { nombre: "Portfolio", descripcion: "Componentes animados (espectro, modales, carruseles)." },
      ],
      como: "Componentización y Single Page Applications modernas.",
    },
  },
  {
    nombre: "TailwindCSS",
    icono: <SiTailwindcss className="text-teal-300" />,
    detalle: {
      cuando: "Desde 2023",
      proyectos: [
        { nombre: "Portfolio", descripcion: "Maquetado rápido y responsivo, sin CSS puro." },
      ],
      como: "Diseño y estilos ultra rápidos y adaptables.",
    },
  },
  {
    nombre: "Astro",
    icono: <SiAstro className="text-purple-400" />,
    detalle: {
      cuando: "Desde 2024",
      proyectos: [
        { nombre: "Portfolio", descripcion: "Sitio principal (SSR, islands architecture, integraciones con React)." },
      ],
      como: "Generación de sitios web modernos, rápidos y SEO-friendly.",
    },
  },
  {
    nombre: "Node.js",
    icono: <SiNodedotjs className="text-green-500" />,
    detalle: {
      cuando: "Desde 2022",
      proyectos: [
        { nombre: "BookFree", descripcion: "Automatización y generación de catálogos PDF." },
      ],
      como: "Scripts, automatización y pequeños servidores.",
    },
  },
  {
    nombre: "Kotlin",
    icono: <SiKotlin className="text-purple-500" />,
    detalle: {
      cuando: "Desde 2024",
      proyectos: [
        { nombre: "BookFree (Android)", descripcion: "App móvil nativa para lectura, manejo de archivos, UI personalizada." },
      ],
      como: "Desarrollo de apps móviles Android nativas.",
    },
  },
  {
    nombre: "Android",
    icono: <FaAndroid className="text-green-400" />,
    detalle: {
      cuando: "Desde 2024",
      proyectos: [
        { nombre: "BookFree", descripcion: "App multiplataforma, integración con almacenamiento local." },
      ],
      como: "Manejo de layouts, permisos, UI y funciones nativas.",
    },
  },
  {
    nombre: "HTML5",
    icono: <SiHtml5 className="text-orange-500" />,
    detalle: {
      cuando: "Desde 2020",
      proyectos: [
        { nombre: "Portfolio", descripcion: "Estructuración semántica del sitio web." },
      ],
      como: "Bases de la web, integración con frameworks.",
    },
  },
  {
    nombre: "CSS3",
    icono: <SiCss3 className="text-blue-500" />,
    detalle: {
      cuando: "Desde 2020",
      proyectos: [
        { nombre: "Portfolio", descripcion: "Animaciones custom y layout." },
      ],
      como: "Diseño clásico, animaciones y responsividad.",
    },
  },
  {
    nombre: "Git",
    icono: <SiGit className="text-orange-400" />,
    detalle: {
      cuando: "Desde 2022",
      proyectos: [
        { nombre: "Todos", descripcion: "Control de versiones y ramas, colaboración." },
      ],
      como: "Versionado, backup y trabajo colaborativo.",
    },
  },
  {
    nombre: "GitHub",
    icono: <SiGithub className="text-gray-200" />,
    detalle: {
      cuando: "Desde 2022",
      proyectos: [
        { nombre: "Todos", descripcion: "Repositorios públicos/privados, acciones automáticas, issues." },
      ],
      como: "Hosting de código, integración y despliegue.",
    },
  },
];

// Tooltip/modal pequeño
function Tooltip({ tecnologia, visible }) {
  if (!visible || !tecnologia) return null;
  return (
    <div
      className="absolute z-40 bg-[#200056] rounded-xl shadow-lg p-4 w-72 border border-violet-900"
      style={{
        top: "4rem",
        left: "50%",
        transform: "translate(-50%, 0)",
        pointerEvents: "auto"
      }}
    >
      <h3 className="text-lg font-bold mb-1">{tecnologia.nombre}</h3>
      <div className="mb-1 text-gray-300 text-xs">
        <strong>Desde:</strong> {tecnologia.detalle.cuando}
      </div>
      <div className="mb-2">
        <strong className="text-gray-300 text-xs">Proyectos:</strong>
        <ul className="list-disc ml-5 text-gray-200 text-xs">
          {tecnologia.detalle.proyectos.map((p, i) => (
            <li key={i}><b>{p.nombre}:</b> {p.descripcion}</li>
          ))}
        </ul>
      </div>
      <div className="text-gray-300 text-xs">
        <strong>Implementación:</strong> {tecnologia.detalle.como}
      </div>
    </div>
  );
}

export default function Tecnologias() {
  const [activeTec, setActiveTec] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  // Detecta si es touch (móvil)
  const handleTouch = () => {
    if (!isTouch) setIsTouch(true);
  };

  return (
    <section className="max-w-3xl w-full mx-auto mt-16 px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Tecnologías y conocimientos</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {tecnologias.map((tec, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center group relative"
            // HOVER para PC
            onMouseEnter={() => !isTouch && setActiveTec(tec)}
            onMouseLeave={() => !isTouch && setActiveTec(null)}
            // CLICK para móvil
            onTouchStart={e => { handleTouch(); setActiveTec(tec); e.stopPropagation(); }}
            onClick={e => { if (isTouch) { setActiveTec(tec); e.stopPropagation(); } }}
            tabIndex={0}
            style={{ minWidth: 80 }}
          >
            <span className="text-4xl mb-1 transition-transform group-hover:scale-110 cursor-pointer">{tec.icono}</span>
            <span className="text-sm text-gray-200">{tec.nombre}</span>
            <Tooltip tecnologia={tec} visible={activeTec === tec} />
          </div>
        ))}
      </div>
      {/* Cierra el tooltip si tocas fuera en móvil */}
      {isTouch && activeTec &&
        <div
          className="fixed inset-0 z-30"
          style={{ background: "transparent" }}
          onClick={() => setActiveTec(null)}
        />
      }
    </section>
  );
}

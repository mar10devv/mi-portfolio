import React, { useState } from "react";
import { FaGithub, FaGlobe, FaGooglePlay } from "react-icons/fa";
import ProyectoModal from "./ProyectoModal"; // Ajustá el path si está en otra carpeta

const proyectos = [
  {
    nombre: "BookFree (Android)",
    descripcion: "App móvil Android para gestionar y leer libros PDF, personalización de portadas, temas y recomendaciones inteligentes.",
    tecnologias: ["Kotlin", "Android Studio", "Node.js"],
    links: [
      { url: "https://github.com/mar10devv/FreeBook", icon: <FaGithub />, label: "GitHub" },
      // { url: "https://play.google.com/store/apps/details?id=bookfree", icon: <FaGooglePlay />, label: "Play Store" },
    ],
    imagen: "/freebook-app.ico",
  },
  {
    nombre: "FreeBook Web",
    descripcion: "Plataforma web para descargar y descubrir libros gratuitos. Desarrollada en Astro, React y TailwindCSS.",
    tecnologias: ["Astro", "React", "TailwindCSS", "Node.js"],
    links: [
      { url: "https://github.com/mar10devv/freebook-web", icon: <FaGithub />, label: "GitHub" },
      { url: "https://freebook-web.netlify.app/", icon: <FaGlobe />, label: "Ver online" },
    ],
    imagen: "/freebook-web.png",
  },
  {
    nombre: "Gaona Web",
    descripcion: "Sitio institucional y catálogo digital para la empresa Gaona. Incluye panel de administración y catálogo de productos online.",
    tecnologias: ["Astro", "React", "TailwindCSS", "Node.js"],
    links: [
      { url: "https://github.com/mar10devv/gaona", icon: <FaGithub />, label: "GitHub" },
      // { url: "https://gaona.tusitio.com", icon: <FaGlobe />, label: "Ver online" },
    ],
    imagen: "/gaona-web.png",
  },
  {
    nombre: "Portfolio",
    descripcion: "Mi sitio personal desarrollado con Astro, React y TailwindCSS. Animaciones interactivas y secciones personalizadas.",
    tecnologias: ["Astro", "React", "TailwindCSS", "Framer Motion"],
    links: [
      { url: "https://github.com/tuusuario/portfolio", icon: <FaGithub />, label: "GitHub" },
      { url: "https://tusitio.com", icon: <FaGlobe />, label: "Ver online" },
    ],
    imagen: "/porfolio.png",
  },
];

export default function Proyectos() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (proy) => {
    setProyectoSeleccionado(proy);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProyectoSeleccionado(null);
  };

  return (
    <section className="max-w-5xl w-full mx-auto mt-20 px-4 py-8">
      <h2 className="font-inter text-2xl font-bold text-white mb-8 text-center">
        Proyectos
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {proyectos.map((proy, i) => (
          <div
            key={i}
            className="bg-[#22014b] rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:scale-[1.025] transition cursor-pointer"
            onClick={() => abrirModal(proy)}
          >
            <img
              src={proy.imagen}
              alt={`Imagen de ${proy.nombre}`}
              className="w-32 h-32 object-cover rounded-lg border-2 border-violet-600 bg-[#1a0537]"
              loading="lazy"
            />
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h3 className="font-inter text-xl text-white font-bold">{proy.nombre}</h3>
                <div className="flex gap-2">
                  {proy.links.map((l, idx) => (
                    <a
                      key={idx}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-300 hover:text-fuchsia-400 text-xl"
                      title={l.label}
                      onClick={e => e.stopPropagation()} // Evita que abrir link también abra el modal
                    >
                      {l.icon}
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-gray-200 font-jetbrains text-sm">{proy.descripcion}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {proy.tecnologias.map((tec, idx) => (
                  <span
                    key={idx}
                    className="bg-violet-800/60 text-violet-200 text-xs px-2 py-1 rounded font-jetbrains"
                  >
                    {tec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProyectoModal open={modalAbierto} onClose={cerrarModal} proyecto={proyectoSeleccionado} />
    </section>
  );
}

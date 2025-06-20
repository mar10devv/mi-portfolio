import React from "react";

export default function ProyectoModal({ open, onClose, proyecto }) {
  if (!open || !proyecto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
        <button className="absolute top-3 right-4 text-xl" onClick={onClose}>
          ×
        </button>
        <img
          src={proyecto.imagen}
          alt={proyecto.nombre}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{proyecto.nombre}</h2>
        {proyecto.estado && (
          <span className="inline-block bg-yellow-200 text-yellow-800 px-2 py-1 rounded mb-2 text-xs">
            {proyecto.estado}
          </span>
        )}
        <p className="mb-3 text-gray-700 dark:text-gray-200">{proyecto.descripcion}</p>
        <div className="mb-3">
          <span className="font-semibold">Tecnologías:</span>{" "}
          {proyecto.tecnologias.map((tec, i) => (
            <span key={i} className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs mr-2">{tec}</span>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          {proyecto.url && (
            <a
              href={proyecto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Visitar web
            </a>
          )}
          {proyecto.github && (
            <a
              href={proyecto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

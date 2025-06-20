import DecryptedText from './DecryptedText';

export default function SobreMi() {
  return (
    <section className="max-w-xl w-full mx-auto mt-12 px-4 py-8 shadow-lg backdrop-blur-md rounded-2xl">
      <h2 className="font-inter text-2xl font-bold text-white mb-3 tracking-wide text-center">
        Sobre mí
      </h2>
      <DecryptedText
        text="¡Hola! Soy Martin Martinez, apasionado por la tecnología y el desarrollo web. Me encanta aprender cosas nuevas y afrontar desafíos que me permitan crecer profesional y personalmente. Actualmente estoy enfocado en el desarrollo de apps móviles y web, y siempre busco mejorar tanto mis habilidades técnicas como creativas."
        speed={18}
        maxIterations={14}
        sequential={true}
        revealDirection="start"
        className="text-gray-200 text-base leading-relaxed text-center font-jetbrains"
        encryptedClassName="text-base text-violet-400 font-mono text-center font-jetbrains"
        animateOn="view"
      />
    </section>
  );
}

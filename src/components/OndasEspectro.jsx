import { useEffect, useRef, useState } from "react";
import AnimatedBadgeText from "./AnimatedBadgeText";
import Navbar from "./Navbar";

export default function OndasEspectro() {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = 100;
    const lines = 128;
    const amplitudes = Array.from({ length: lines }, () => Math.random() * 20 + 10);

    let animationFrame;

    function draw(currentTick) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < lines; i++) {
        const angle = (i / lines) * Math.PI * 2;
        const wave = hovered ? Math.sin(currentTick + i * 0.2) * amplitudes[i] : 0;
        const dynamicRadius = baseRadius + wave;

        const x1 = centerX + Math.cos(angle) * baseRadius;
        const y1 = centerY + Math.sin(angle) * baseRadius;
        const x2 = centerX + Math.cos(angle) * dynamicRadius;
        const y2 = centerY + Math.sin(angle) * dynamicRadius;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, "#00f0ff");
        grad.addColorStop(0.5, "#9f00ff");
        grad.addColorStop(1, "#ff00c8");

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowColor = "#ff00c8";
        ctx.shadowBlur = 10;
        ctx.stroke();
      }

      if (hovered) {
        setTick((prev) => prev + 0.03);
      }

      animationFrame = requestAnimationFrame(() => draw(currentTick + 0.03));
    }

    draw(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [hovered]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Foto y espectro */}
      <div
        className="relative w-[350px] h-[350px] flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <canvas
          ref={canvasRef}
          width={350}
          height={350}
          className="absolute z-0"
        />
        <img
          src="/creator.jpg"
          alt="Foto"
          className="absolute w-48 h-48 rounded-full z-10 object-cover shadow-xl cursor-pointer"
        />
      </div>

      {/* Navbar: iconos centrados debajo de la foto */}
      <Navbar />

      {/* Badge animado */}
      <div className="flex justify-center items-center w-full">
        <AnimatedBadgeText
          fixedText="Martin"
          badges={["Developer jr", "Martinez"]}
          interval={4000}
        />
      </div>
    </div>
  );
}

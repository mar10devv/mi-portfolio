import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedBadgeText({
  fixedText = "Creative",
  badges = ["components!", "thinking", "ideas"],
  interval = 2000,
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % badges.length), interval);
    return () => clearInterval(id);
  }, [badges.length, interval]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 w-full max-w-[95vw] mx-auto text-3xl sm:text-5xl md:text-7xl font-bold mt-2">
    <span className="text-white drop-shadow-lg">{fixedText}</span>
    <span className="block" style={{ minWidth: "8ch", maxWidth: "70vw" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={badges[idx]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="inline-block w-full px-5 sm:px-8 py-2 rounded-lg bg-[#5533FF] text-white text-center break-words"
          style={{ wordBreak: "break-word" }}
        >
          {badges[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  </div>
  
  );
}

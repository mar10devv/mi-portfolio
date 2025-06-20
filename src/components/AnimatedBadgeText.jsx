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
    <div className="flex gap-3 items-center justify-center w-full text-5xl sm:text-7xl md:text-8xl font-bold mt-2">
  <span className="text-white drop-shadow-lg">{fixedText}</span>
  <span style={{ minWidth: "10ch" }}>
    <AnimatePresence mode="wait">
      <motion.span
        key={badges[idx]}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="inline-block px-7 sm:px-10 py-2 rounded-lg bg-[#5533FF] text-white"
      >
        {badges[idx]}
      </motion.span>
    </AnimatePresence>
  </span>
</div>

  );
}

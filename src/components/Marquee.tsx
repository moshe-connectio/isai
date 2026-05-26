"use client";

import { motion, useReducedMotion } from "framer-motion";

const principles = [
  "שקט",
  "STILLNESS",
  "זרימה",
  "FLOW",
  "כוח",
  "POWER",
  "רפיון",
  "RELAXATION",
  "שורש",
  "ROOT",
  "גל",
  "WAVE",
  "ריקות",
  "EMPTINESS",
  "שלמות",
  "INTEGRITY",
];

export function Marquee() {
  const reduce = useReducedMotion();
  const items = [...principles, ...principles];

  return (
    <div className="relative overflow-hidden border-y hairline bg-ink/60 py-6">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-ink to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-ink to-transparent"
        aria-hidden
      />
      <motion.ul
        className="flex w-max items-center gap-12 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{
          duration: 38,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((p, i) => (
          <li
            key={`${p}-${i}`}
            className={`flex items-center gap-12 text-2xl ${
              i % 2 === 0
                ? "font-display text-bone"
                : "text-xs tracking-[0.4em] text-mute"
            }`}
          >
            <span>{p}</span>
            <span className="text-amber/60">◦</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

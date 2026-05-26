"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated background of flowing axial waves —
 * visual metaphor for ISAI's "Formless Flow" / natural movement.
 */
export function FlowBackground() {
  const reduce = useReducedMotion();

  const waves = [
    { d: "M -50 220 Q 200 120 450 220 T 950 220 T 1450 220", delay: 0 },
    { d: "M -50 320 Q 250 220 500 320 T 1000 320 T 1500 320", delay: 0.3 },
    { d: "M -50 420 Q 220 320 470 420 T 970 420 T 1470 420", delay: 0.6 },
    { d: "M -50 520 Q 260 420 510 520 T 1010 520 T 1510 520", delay: 0.9 },
    { d: "M -50 620 Q 200 520 450 620 T 950 620 T 1450 620", delay: 1.2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(200,155,74,0.10), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(138,31,31,0.08), transparent 55%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="flowGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#c89b4a" stopOpacity="0" />
            <stop offset="50%" stopColor="#e4b864" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#c89b4a" stopOpacity="0" />
          </linearGradient>
        </defs>
        {waves.map((w, i) => (
          <motion.path
            key={i}
            d={w.d}
            stroke="url(#flowGrad)"
            strokeWidth={1}
            fill="none"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.4 }
                : { pathLength: 1, opacity: [0, 0.6, 0.35] }
            }
            transition={{
              duration: 3.2,
              delay: w.delay,
              ease: "easeInOut",
              opacity: { duration: 3.2, delay: w.delay },
            }}
          />
        ))}
      </svg>
    </div>
  );
}

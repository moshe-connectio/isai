"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Calligraphic section divider — a single hand-stroke
 * that draws itself when scrolled into view. Replaces flat borders
 * between sections with a "brush mark" feel.
 */
export function Divider({ flip = false }: { flip?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden
      className="pointer-events-none relative mx-auto h-12 w-full max-w-6xl px-6"
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "scale-y-[-1]" : ""}`}
      >
        <defs>
          <linearGradient id="brushGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#c89b4a" stopOpacity="0" />
            <stop offset="20%" stopColor="#c89b4a" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#e4b864" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c89b4a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 20 20 C 220 6, 420 34, 620 18 S 1000 6, 1180 22"
          stroke="url(#brushGrad)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="20"
          cy="20"
          r="2"
          fill="#c89b4a"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: [0, 1, 0.4] }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        />
      </svg>
    </div>
  );
}

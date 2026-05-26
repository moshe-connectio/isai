"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Daoist Bagua trigram ring + central yin-yang dot — slowly rotating.
 * A nod to ISAI's roots in Fuxi Bagua biomechanics.
 */
export function Trigram({
  size = 280,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  // 8 trigrams positions around a circle
  const trigrams = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const r = 110;
    return {
      x: 150 + Math.cos(angle) * r,
      y: 150 + Math.sin(angle) * r,
      rot: (i / 8) * 360,
      // bit pattern for each of the 8 trigrams (1=solid, 0=broken)
      lines: [
        [1, 1, 1], // ☰
        [1, 1, 0], // ☱
        [1, 0, 1], // ☲
        [1, 0, 0], // ☳
        [0, 1, 1], // ☴
        [0, 1, 0], // ☵
        [0, 0, 1], // ☶
        [0, 0, 0], // ☷
      ][i],
    };
  });

  return (
    <motion.svg
      viewBox="0 0 300 300"
      width={size}
      height={size}
      className={className}
      aria-hidden
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration: 180, ease: "linear", repeat: Infinity }}
    >
      <defs>
        <radialGradient id="trigramHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c89b4a" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#c89b4a" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#c89b4a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="150" cy="150" r="140" fill="url(#trigramHalo)" />
      <circle
        cx="150"
        cy="150"
        r="135"
        fill="none"
        stroke="#c89b4a"
        strokeOpacity="0.18"
      />
      <circle
        cx="150"
        cy="150"
        r="92"
        fill="none"
        stroke="#c89b4a"
        strokeOpacity="0.12"
      />

      {trigrams.map((t, i) => (
        <g
          key={i}
          transform={`translate(${t.x} ${t.y}) rotate(${t.rot + 90})`}
        >
          {t.lines.map((line, j) =>
            line === 1 ? (
              <rect
                key={j}
                x={-14}
                y={-8 + j * 6}
                width={28}
                height={2}
                fill="#c89b4a"
                opacity={0.55}
              />
            ) : (
              <g key={j}>
                <rect
                  x={-14}
                  y={-8 + j * 6}
                  width={11}
                  height={2}
                  fill="#c89b4a"
                  opacity={0.55}
                />
                <rect
                  x={3}
                  y={-8 + j * 6}
                  width={11}
                  height={2}
                  fill="#c89b4a"
                  opacity={0.55}
                />
              </g>
            )
          )}
        </g>
      ))}

      {/* Counter-rotating inner yin-yang */}
      <motion.g
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        style={{ transformOrigin: "150px 150px" }}
      >
        <circle
          cx="150"
          cy="150"
          r="30"
          fill="none"
          stroke="#c89b4a"
          strokeOpacity="0.5"
        />
        <path
          d="M 150 120 a 30 30 0 0 1 0 60 a 15 15 0 0 1 0 -30 a 15 15 0 0 0 0 -30 z"
          fill="#c89b4a"
          opacity="0.7"
        />
        <circle cx="150" cy="135" r="3" fill="#0a0a0b" />
        <circle cx="150" cy="165" r="3" fill="#c89b4a" />
      </motion.g>
    </motion.svg>
  );
}

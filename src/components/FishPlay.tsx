"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { className?: string; size?: number };

export function FishPlay({ className = "", size = 460 }: Props) {
  const reduce = useReducedMotion();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2.4,
          delay: i * 0.6,
          ease: [0.22, 1, 0.36, 1] as const,
        },
        opacity: { duration: 0.4, delay: i * 0.6 },
      },
    }),
  };

  const pop = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 1.4 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  // Coordinates (viewBox 500x500, center 250,250, r=180)
  const points = [
    { id: "L0", x: 70, y: 250, tx: 38, ty: 248, align: "end" as const },
    { id: "L4", x: 70, y: 250, tx: 38, ty: 268, align: "end" as const },
    { id: "L3", x: 188, y: 84, tx: 178, ty: 64, align: "middle" as const },
    { id: "L1", x: 281, y: 78, tx: 296, ty: 64, align: "start" as const },
    { id: "L2", x: 240, y: 178, tx: 252, ty: 188, align: "start" as const },
    { id: "R0", x: 430, y: 250, tx: 462, ty: 268, align: "start" as const },
    { id: "R4", x: 430, y: 250, tx: 462, ty: 248, align: "start" as const },
    { id: "R3", x: 312, y: 416, tx: 326, ty: 436, align: "middle" as const },
    { id: "R1", x: 219, y: 422, tx: 204, ty: 436, align: "middle" as const },
    { id: "R2", x: 260, y: 322, tx: 248, ty: 312, align: "end" as const },
  ];

  return (
    <motion.svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={className}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      role="img"
      aria-label="Unebbing fish play — דיאגרמת תנועה מעגלית של ISAI"
    >
      <defs>
        <linearGradient id="fp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c89b4a" />
          <stop offset="100%" stopColor="#e4b864" />
        </linearGradient>
        <radialGradient id="fp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c89b4a" stopOpacity="0.16" />
          <stop offset="70%" stopColor="#c89b4a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="250" cy="250" r="220" fill="url(#fp-glow)" />

      {/* Outer circle — slow rotation for life */}
      <motion.g
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "250px 250px" }}
      >
        <motion.circle
          cx="250"
          cy="250"
          r="180"
          fill="none"
          stroke="url(#fp-grad)"
          strokeWidth="1.5"
          custom={0}
          variants={draw}
        />
        {/* Subtle tick marks every 45° */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 250 + Math.cos(rad) * 178;
          const y1 = 250 + Math.sin(rad) * 178;
          const x2 = 250 + Math.cos(rad) * 184;
          const y2 = 250 + Math.sin(rad) * 184;
          return (
            <motion.line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#c89b4a"
              strokeWidth="1"
              strokeOpacity="0.6"
              custom={0}
              variants={draw}
            />
          );
        })}
      </motion.g>

      {/* Left arm fish — upper loop crossing itself */}
      <motion.path
        d="M 188 84 C 260 150, 200 220, 240 178"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        custom={1}
        variants={draw}
      />
      <motion.path
        d="M 240 178 C 290 138, 220 90, 281 78"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        custom={2}
        variants={draw}
      />

      {/* Right arm fish — lower loop mirror */}
      <motion.path
        d="M 312 416 C 240 350, 300 280, 260 322"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        custom={1}
        variants={draw}
      />
      <motion.path
        d="M 260 322 C 210 362, 280 410, 219 422"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        custom={2}
        variants={draw}
      />

      {/* Direction arrows (clockwise) */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <path
          d="M 100 110 l 8 -4 l -2 8 z"
          fill="#e4b864"
        />
        <path
          d="M 400 390 l -8 4 l 2 -8 z"
          fill="#e4b864"
        />
      </motion.g>

      {/* Points + labels */}
      {points.map((p, i) => (
        <motion.g key={p.id + i} custom={i} variants={pop} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <circle cx={p.x} cy={p.y} r="3.5" fill="#e4b864" />
          <circle cx={p.x} cy={p.y} r="6" fill="none" stroke="#e4b864" strokeOpacity="0.3" strokeWidth="1" />
          <text
            x={p.tx}
            y={p.ty}
            fill="#f3ece0"
            fontSize="14"
            fontFamily="'Frank Ruhl Libre', serif"
            textAnchor={p.align}
          >
            {p.id}
          </text>
        </motion.g>
      ))}

      {/* Side labels */}
      <motion.text
        x="20"
        y="190"
        fill="#7d7669"
        fontSize="13"
        fontFamily="'Frank Ruhl Libre', serif"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        Left arm
      </motion.text>
      <motion.text
        x="478"
        y="320"
        fill="#7d7669"
        fontSize="13"
        fontFamily="'Frank Ruhl Libre', serif"
        textAnchor="end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        Right arm
      </motion.text>

      {/* Title */}
      <motion.text
        x="250"
        y="32"
        fill="#c89b4a"
        fontSize="13"
        fontFamily="'Frank Ruhl Libre', serif"
        textAnchor="middle"
        letterSpacing="3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        UNEBBING FISH PLAY
      </motion.text>
      <motion.text
        x="250"
        y="50"
        fill="#7d7669"
        fontSize="10"
        fontFamily="'Frank Ruhl Libre', serif"
        textAnchor="middle"
        letterSpacing="2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        clockwise direction
      </motion.text>

      {/* Animated tracer dot along the circle */}
      {!reduce && (
        <motion.circle
          r="4"
          fill="#e4b864"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 3, duration: 6, repeat: Infinity, repeatDelay: 1 }}
        >
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M 70 250 A 180 180 0 1 1 71 250 Z"
          />
        </motion.circle>
      )}
    </motion.svg>
  );
}

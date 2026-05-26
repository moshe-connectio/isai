"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { className?: string; size?: number };

/**
 * Unebbing Fish Play — clockwise direction
 * Faithful recreation of Moshe Gorelik's 2007 diagram.
 *
 * ViewBox 500x500, circle center (250,250), r=180.
 * Left fish (upper arc): L0/L4 entry, fish loop L3 → L2 (tail) → L1.
 * Right fish: 180° rotation of left fish.
 * Both hands travel their full path simultaneously.
 */
export function FishPlay({ className = "", size = 520 }: Props) {
  const reduce = useReducedMotion();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2.2,
          delay: i * 0.55,
          ease: [0.22, 1, 0.36, 1] as const,
        },
        opacity: { duration: 0.4, delay: i * 0.55 },
      },
    }),
  };

  const pop = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.6 + i * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const points = [
    { id: "L0", x: 70, y: 246, tx: 40, ty: 244, align: "end" as const },
    { id: "L4", x: 70, y: 254, tx: 40, ty: 268, align: "end" as const },
    { id: "L3", x: 175, y: 90, tx: 168, ty: 70, align: "end" as const },
    { id: "L1", x: 300, y: 80, tx: 310, ty: 70, align: "start" as const },
    { id: "L2", x: 245, y: 185, tx: 258, ty: 198, align: "start" as const },
    { id: "R0", x: 430, y: 254, tx: 460, ty: 268, align: "start" as const },
    { id: "R4", x: 430, y: 246, tx: 460, ty: 244, align: "start" as const },
    { id: "R3", x: 325, y: 410, tx: 336, ty: 430, align: "start" as const },
    { id: "R1", x: 200, y: 420, tx: 190, ty: 442, align: "end" as const },
    { id: "R2", x: 255, y: 315, tx: 244, ty: 308, align: "end" as const },
  ];

  // Full continuous motion path for each hand
  const leftMotion =
    "M 70 250 A 180 180 0 0 0 175 90 C 285 110 270 195 245 185 C 195 165 195 85 300 80 A 180 180 0 1 1 70 250";
  const rightMotion =
    "M 430 250 A 180 180 0 0 0 325 410 C 215 390 230 305 255 315 C 305 335 305 415 200 420 A 180 180 0 1 1 430 250";

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
      aria-label="Unebbing fish play — דיאגרמת תנועת הידיים של ISAI"
    >
      <defs>
        <linearGradient id="fp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c89b4a" />
          <stop offset="100%" stopColor="#e4b864" />
        </linearGradient>
        <radialGradient id="fp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c89b4a" stopOpacity="0.18" />
          <stop offset="70%" stopColor="#c89b4a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fp-dot-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e4b864" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#c89b4a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c89b4a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="250" cy="250" r="230" fill="url(#fp-glow)" />

      {/* Main circle */}
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

      {/* LEFT FISH — two cubics that cross above L2 */}
      <motion.path
        d="M 175 90 C 285 110, 270 195, 245 185"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        custom={1}
        variants={draw}
      />
      <motion.path
        d="M 245 185 C 195 165, 195 85, 300 80"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        custom={2}
        variants={draw}
      />

      {/* RIGHT FISH — 180° rotation of the left fish */}
      <motion.path
        d="M 325 410 C 215 390, 230 305, 255 315"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        custom={1}
        variants={draw}
      />
      <motion.path
        d="M 255 315 C 305 335, 305 415, 200 420"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        custom={2}
        variants={draw}
      />

      {/* Clockwise direction arrowheads on circle */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.85 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 2.4, duration: 0.8 }}
        fill="#e4b864"
      >
        <polygon points="420,190 410,196 414,206" />
        <polygon points="80,310 90,304 86,294" />
      </motion.g>

      {/* Points + labels */}
      {points.map((p, i) => (
        <motion.g
          key={p.id + i}
          custom={i}
          variants={pop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <circle
            cx={p.x}
            cy={p.y}
            r="6"
            fill="none"
            stroke="#e4b864"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <circle cx={p.x} cy={p.y} r="3.2" fill="#e4b864" />
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
        y="195"
        fill="#7d7669"
        fontSize="13"
        fontFamily="'Frank Ruhl Libre', serif"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        Left arm
      </motion.text>
      <motion.text
        x="478"
        y="318"
        fill="#7d7669"
        fontSize="13"
        fontFamily="'Frank Ruhl Libre', serif"
        textAnchor="end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        Right arm
      </motion.text>

      {/* Title */}
      <motion.text
        x="250"
        y="36"
        fill="#c89b4a"
        fontSize="13"
        fontFamily="'Frank Ruhl Libre', serif"
        textAnchor="middle"
        letterSpacing="3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.95 }}
        viewport={{ once: true }}
        transition={{ delay: 2.6, duration: 0.8 }}
      >
        UNEBBING FISH PLAY
      </motion.text>
      <motion.text
        x="250"
        y="54"
        fill="#7d7669"
        fontSize="10"
        fontFamily="'Frank Ruhl Libre', serif"
        textAnchor="middle"
        letterSpacing="2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.7, duration: 0.8 }}
      >
        clockwise direction
      </motion.text>

      {/* TRACER DOTS — actual hands traveling the path simultaneously */}
      {!reduce && (
        <>
          <circle r="14" fill="url(#fp-dot-glow)">
            <animateMotion
              dur="14s"
              repeatCount="indefinite"
              begin="3s"
              path={leftMotion}
            />
          </circle>
          <circle r="5" fill="#e4b864" stroke="#f3ece0" strokeWidth="1">
            <animateMotion
              dur="14s"
              repeatCount="indefinite"
              begin="3s"
              path={leftMotion}
            />
          </circle>

          <circle r="14" fill="url(#fp-dot-glow)">
            <animateMotion
              dur="14s"
              repeatCount="indefinite"
              begin="3s"
              path={rightMotion}
            />
          </circle>
          <circle r="5" fill="#e4b864" stroke="#f3ece0" strokeWidth="1">
            <animateMotion
              dur="14s"
              repeatCount="indefinite"
              begin="3s"
              path={rightMotion}
            />
          </circle>
        </>
      )}

      {/* Legend */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3.2, duration: 0.8 }}
      >
        <circle cx="36" cy="478" r="4" fill="#e4b864" />
        <text
          x="46"
          y="482"
          fill="#7d7669"
          fontSize="10"
          fontFamily="'Frank Ruhl Libre', serif"
          letterSpacing="1.5"
        >
          HAND POSITION
        </text>
      </motion.g>
    </motion.svg>
  );
}

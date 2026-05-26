"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { className?: string; size?: number };

/**
 * Unebbing Fish Play — clockwise direction
 *
 * Faithful recreation of Moshe Gorelik's 2007 diagram with mathematically
 * verified curve crossings.
 *
 * Geometry:
 *   viewBox 500x500, center (250,250), radius 180
 *   L3 (188, 88)   — upper-left on circle  (angle ≈ 117°)
 *   L1 (290, 78)   — upper-right on circle (angle ≈ 73°)
 *   L2 (235, 175)  — fish tail, inside the circle
 *   L0 = L4 (70, 250) — left of circle, 9 o'clock
 *   Crossing point  ≈ (240, 130)  — verified via cubic Bezier midpoint
 *
 *   Right fish = 180° rotation of left fish about (250, 250)
 *
 * Curve construction (left fish):
 *   L3→L2: M 188 88 C 290 100, 209 159, 235 175
 *          → midpoint = (188+3·290+3·209+235)/8, … = (240, 130) ✓
 *          → tangent at t=0.5: (-25, +110)  (LEFT-DOWN)
 *   L2→L1: M 235 175 C 185 175, 280 87, 290 78
 *          → midpoint = (235+3·185+3·280+290)/8, … = (240, 130) ✓
 *          → tangent at t=0.5: (+112, -139) (RIGHT-UP)
 *   Opposite tangents at common midpoint ⇒ real curve crossing.
 *
 * Both hands traverse a full closed path simultaneously:
 *   L: L0 → (CW short arc) L3 → L2 → L1 → (CW long arc back) L0
 *   R: R0 → (CW short arc) R3 → R2 → R1 → (CW long arc back) R0
 */
export function FishPlay({ className = "", size = 540 }: Props) {
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
      transition: {
        delay: 1.8 + i * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  // Anchor points — labels placed to avoid overlapping the curves
  const points = [
    { id: "L0", x: 70, y: 246, tx: 42, ty: 244, align: "end" as const },
    { id: "L4", x: 70, y: 254, tx: 42, ty: 268, align: "end" as const },
    { id: "L3", x: 188, y: 88, tx: 178, ty: 70, align: "end" as const },
    { id: "L1", x: 290, y: 78, tx: 300, ty: 70, align: "start" as const },
    { id: "L2", x: 235, y: 175, tx: 248, ty: 186, align: "start" as const },
    { id: "R0", x: 430, y: 254, tx: 458, ty: 268, align: "start" as const },
    { id: "R4", x: 430, y: 246, tx: 458, ty: 244, align: "start" as const },
    { id: "R3", x: 312, y: 412, tx: 322, ty: 430, align: "start" as const },
    { id: "R1", x: 210, y: 422, tx: 200, ty: 442, align: "end" as const },
    { id: "R2", x: 265, y: 325, tx: 252, ty: 318, align: "end" as const },
  ];

  // Full continuous motion paths (one per hand)
  const leftMotion =
    "M 70 250 A 180 180 0 0 1 188 88 C 290 100 209 159 235 175 C 185 175 280 87 290 78 A 180 180 0 1 1 70 250";
  const rightMotion =
    "M 430 250 A 180 180 0 0 1 312 412 C 210 400 291 341 265 325 C 315 325 220 413 210 422 A 180 180 0 1 1 430 250";

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
      aria-label="Unebbing Fish Play — דיאגרמת תנועת הידיים של ISAI"
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
          <stop offset="0%" stopColor="#e4b864" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#c89b4a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c89b4a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow behind the figure */}
      <circle cx="250" cy="250" r="232" fill="url(#fp-glow)" />

      {/* Main outer circle */}
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

      {/* LEFT FISH — two cubics meeting at L2, sharing crossing point (240,130) */}
      <motion.path
        d="M 188 88 C 290 100, 209 159, 235 175"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        custom={1}
        variants={draw}
      />
      <motion.path
        d="M 235 175 C 185 175, 280 87, 290 78"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        custom={2}
        variants={draw}
      />

      {/* RIGHT FISH — 180° rotation of left fish about (250,250) */}
      <motion.path
        d="M 312 412 C 210 400, 291 341, 265 325"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        custom={1}
        variants={draw}
      />
      <motion.path
        d="M 265 325 C 315 325, 220 413, 210 422"
        fill="none"
        stroke="url(#fp-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        custom={2}
        variants={draw}
      />

      {/* Clockwise direction arrowheads on the outer circle */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.85 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 2.6, duration: 0.8 }}
        fill="#e4b864"
      >
        {/* upper-right, pointing down-right (clockwise) */}
        <polygon points="424,206 414,200 412,212" />
        {/* lower-left, pointing up-left (clockwise continuation) */}
        <polygon points="76,294 86,300 88,288" />
      </motion.g>

      {/* Anchor points + labels */}
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
            r="7"
            fill="none"
            stroke="#e4b864"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <circle cx={p.x} cy={p.y} r="3.4" fill="#e4b864" />
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
        y="172"
        fill="#7d7669"
        fontSize="12"
        fontFamily="'Frank Ruhl Libre', serif"
        letterSpacing="2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        LEFT ARM
      </motion.text>
      <motion.text
        x="480"
        y="340"
        fill="#7d7669"
        fontSize="12"
        fontFamily="'Frank Ruhl Libre', serif"
        textAnchor="end"
        letterSpacing="2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        RIGHT ARM
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
        whileInView={{ opacity: 0.95 }}
        viewport={{ once: true }}
        transition={{ delay: 2.8, duration: 0.8 }}
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
        transition={{ delay: 2.9, duration: 0.8 }}
      >
        clockwise direction
      </motion.text>

      {/* TRACER DOTS — both hands move simultaneously along the full closed path */}
      {!reduce && (
        <>
          {/* Left hand */}
          <circle r="14" fill="url(#fp-dot-glow)">
            <animateMotion
              dur="16s"
              repeatCount="indefinite"
              begin="3s"
              path={leftMotion}
            />
          </circle>
          <circle r="5" fill="#e4b864" stroke="#f3ece0" strokeWidth="1.2">
            <animateMotion
              dur="16s"
              repeatCount="indefinite"
              begin="3s"
              path={leftMotion}
            />
          </circle>

          {/* Right hand */}
          <circle r="14" fill="url(#fp-dot-glow)">
            <animateMotion
              dur="16s"
              repeatCount="indefinite"
              begin="3s"
              path={rightMotion}
            />
          </circle>
          <circle r="5" fill="#e4b864" stroke="#f3ece0" strokeWidth="1.2">
            <animateMotion
              dur="16s"
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
        transition={{ delay: 3.3, duration: 0.8 }}
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
        <text
          x="464"
          y="482"
          fill="#7d7669"
          fontSize="9"
          fontFamily="'Frank Ruhl Libre', serif"
          textAnchor="end"
          letterSpacing="1"
        >
          © 2007 Moshe Gorelik
        </text>
      </motion.g>
    </motion.svg>
  );
}

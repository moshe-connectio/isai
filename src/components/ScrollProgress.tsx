"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.4,
  });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "right" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.5 bg-linear-to-l from-amber via-amber-2 to-amber/0"
      aria-hidden
    />
  );
}

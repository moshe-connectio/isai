"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { FlowBackground } from "./FlowBackground";
import { Trigram } from "./Trigram";
import { MagneticButton } from "./MagneticButton";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const trigramY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const trigramRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative grain isolate flex min-h-svh items-center overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <FlowBackground />
      </motion.div>

      <motion.div
        style={{ y: trigramY, rotate: trigramRotate }}
        initial={reduce ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute -left-32 top-1/2 z-0 -translate-y-1/2"
      >
        <Trigram size={560} />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        animate={
          reduce
            ? undefined
            : { opacity: [0.45, 0.75, 0.45], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 65% 50%, rgba(200,155,74,0.18), transparent 55%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={stagger}
        initial={reduce ? "show" : "hidden"}
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24 md:pt-40"
      >
        <motion.div
          variants={rise}
          className="flex items-center gap-3 text-xs tracking-[0.45em] text-amber/80"
        >
          <motion.span
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
            className="inline-block h-px w-10 bg-amber/60"
          />
          <span>ISRAELI SCIENCE &amp; ART OF INTEGRITY</span>
        </motion.div>

        <motion.h1
          variants={rise}
          className="mt-8 text-[clamp(3.5rem,11vw,9rem)] font-bold leading-[0.9] text-bone"
        >
          <WordReveal text="איסאי" />
          <span className="block font-display text-amber/90">
            <WordReveal text="ISAI" delay={0.25} />
          </span>
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-10 max-w-2xl text-2xl leading-snug text-bone-2 md:text-3xl"
        >
          אמנות הלחימה של{" "}
          <span className="relative inline-block text-amber">
            הזרימה חסרת הצורה
            <motion.span
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 1.1, ease: "easeOut" }}
              style={{ transformOrigin: "right" }}
              className="absolute inset-x-0 -bottom-1 h-px bg-amber/70"
            />
          </span>{" "}
          — מערכת ישראלית המאחדת מדע, אבולוציה ותנועה טבעית למרחב לחימה אחד.
        </motion.p>

        <motion.p
          variants={rise}
          className="mt-6 max-w-xl text-base leading-relaxed text-mute"
        >
          ארבעים שנות מחקר ולחימה זוקקו לשיטה אחת: ביומכניקה פרקטלית, עקרונות
          דאואיסטיים עתיקים, ותנועה טבעית שמשכללת את האדם — לא בונה אותו מחדש.
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#philosophy"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-amber px-7 py-3 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_40px_-4px_rgba(228,184,100,0.6)]"
          >
            <span>גלו את השיטה</span>
            <ArrowDown size={16} />
          </MagneticButton>
          <MagneticButton
            href="#training"
            strength={10}
            className="rounded-full border border-bone/20 px-7 py-3 text-sm text-bone-2 transition-colors hover:border-bone/60 hover:text-bone"
          >
            הצטרפו לאימון
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] text-mute">SCROLL</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-amber/60"
        />
      </motion.div>
    </section>
  );
}

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  const chars = Array.from(text);
  return (
    <span className="inline-block overflow-hidden pb-2 align-baseline">
      {chars.map((c, i) => (
        <motion.span
          key={i}
          initial={reduce ? false : { y: "110%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}

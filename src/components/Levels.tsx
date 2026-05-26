"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const levels = [
  { n: "1", name: "אמבה", en: "Amoeba", joint: "מפרקי הצלעות" },
  { n: "2", name: "דג", en: "Fish", joint: "מפרקי החוליות" },
  { n: "3", name: "דו-חיים", en: "Amphibia", joint: "כתפיים ואגן" },
  { n: "4", name: "זוחלים", en: "Reptiles", joint: "מרפקים וברכיים" },
  { n: "5", name: "יונקים", en: "Mammals", joint: "שורשי כפות יד ורגל" },
  { n: "6", name: "קופים", en: "Apes", joint: "אצבעות ידיים ורגליים" },
  { n: "7", name: "אדם", en: "Human", joint: "הלשון" },
  {
    n: "8",
    name: "האדם של המחר",
    en: "Future Human",
    joint: "תנועה מתוך חזון",
  },
];

export function Levels() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="levels" className="relative bg-ink-2 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-amber/80">
            03 — שמונה הרבדים
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            כל אבולוציית החיים
            <br />
            <span className="text-amber">חיה בתוך הגוף שלך</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base text-bone-2/80">
            תיאוריית הרֵקפיטולציה של ISAI מארגנת את כל מערכת השליטה המוטורית
            שלנו בשמונה רבדים מבוקרים. כל רובד שולט בקבוצת מפרקים — וכל קבוצה
            עוטפת את הקודמת.
          </p>
        </Reveal>

        <div ref={ref} className="relative">
          <div className="pointer-events-none absolute right-[8.333%] top-0 h-full w-px bg-bone/10" />
          <motion.div
            style={{ height: reduce ? "100%" : lineHeight }}
            className="pointer-events-none absolute right-[8.333%] top-0 w-px bg-linear-to-b from-amber via-amber/70 to-transparent"
          />

          <ol className="border-y border-bone/10">
            {levels.map((l, i) => (
              <LevelRow key={l.n} level={l} index={i} reduce={!!reduce} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function LevelRow({
  level,
  index,
  reduce,
}: {
  level: (typeof levels)[number];
  index: number;
  reduce: boolean;
}) {
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduce ? undefined : { x: -6 }}
      className="group relative grid cursor-default grid-cols-12 items-baseline gap-4 border-b border-bone/10 py-6 last:border-b-0"
    >
      <span className="relative col-span-1 font-display text-3xl text-amber/40 transition-colors group-hover:text-amber">
        <span className="absolute right-[-1.6rem] top-4 h-2 w-2 rounded-full border border-amber/40 bg-ink-2 transition-all group-hover:scale-150 group-hover:border-amber group-hover:bg-amber" />
        {level.n}
      </span>
      <span className="col-span-4 text-xl text-bone transition-colors group-hover:text-amber md:text-2xl">
        {level.name}
      </span>
      <span className="col-span-3 text-xs tracking-[0.25em] text-mute">
        {level.en}
      </span>
      <span className="col-span-4 text-sm text-bone-2/80 md:text-base">
        {level.joint}
      </span>
    </motion.li>
  );
}

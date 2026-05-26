"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const videos = [
  {
    id: "E7sC8RgL1eg",
    title: "על עצמי ועל אומנות לחימה ISAI",
    tag: "הצגה",
  },
  {
    id: "gbAwfciLoO8",
    title: "איך נולדה אומנות לחימה ISAI — פרק 5",
    tag: "סיפור",
  },
  {
    id: "AlP8_CUCm3A",
    title: "שיחות קצרות פרק 10: הנשק הסודי — חיתוך הזהב",
    tag: "טכניקה",
  },
  {
    id: "pWhXNfe_cz4",
    title: "ISAI Pushing Hands — דמו קצר",
    tag: "תרגול",
  },
];

export function Videos() {
  const reduce = useReducedMotion();
  return (
    <section id="videos" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 md:mb-24 max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-amber/80">
            06 — וידאו
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            השיטה <span className="text-amber">בתנועה</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base text-bone-2/80">
            הדגמות, שיחות וסיפורים מעולם ה-ISAI — ישירות מהמייסד.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <motion.figure
              key={v.id}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative overflow-hidden border hairline bg-ink transition-colors hover:border-amber/40"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-ink-2">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-4 p-6">
                <h3 className="text-lg text-bone transition-colors group-hover:text-amber md:text-xl">
                  {v.title}
                </h3>
                <span className="shrink-0 rounded-full border border-amber/30 px-3 py-1 text-[10px] tracking-widest text-amber">
                  {v.tag}
                </span>
              </figcaption>
              <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-amber transition-transform duration-700 group-hover:scale-x-100" />
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href="https://www.youtube.com/@ISAImartialarts"
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-3 text-sm tracking-[0.25em] text-amber transition-colors hover:text-amber-2"
          >
            כל הסרטונים בערוץ →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

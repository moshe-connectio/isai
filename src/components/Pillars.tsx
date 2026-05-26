"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const pillars = [
  {
    n: "I",
    title: "Kinegenesis",
    he: "קינגנזיס",
    body: "מודל ביומכניקה פרקטלי הממפה את כל תנועות האדם דרך תיאוריית הרֵקפיטולציה — שמונה רבדים אבולוציוניים שכל אחד מהם פעיל, חי ומשולב בגוף שלך כאן ועכשיו.",
  },
  {
    n: "II",
    title: "Formless Flow",
    he: "זרימה חסרת צורה",
    body: "שיטת אימון שלמה הבונה מצב של Maximum Dynamic Relaxation — רפיון דינמי מקסימלי. הכוח אינו מגיע מכיווץ אלא מגל ציר שעובר דרך הגוף השקוף.",
  },
  {
    n: "III",
    title: "Natural Movement",
    he: "תנועה טבעית",
    body: "פענוח של עקרונות דאואיסטיים עתיקים (Fuxi Bagua, יין-יאנג) כביומכניקה פונקציונלית, ולא כסמלים מיסטיים. הטאו הוא תיאוריית התנועה הוותיקה ביותר שמוכרת לאדם.",
  },
];

export function Pillars() {
  const reduce = useReducedMotion();
  return (
    <section id="pillars" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 md:mb-24 max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-amber/80">
            02 — שלושת היסודות
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            שלוש דרכים. <span className="text-amber">מערכת אחת.</span>
          </h2>
        </Reveal>

        <div className="grid gap-px bg-bone/10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduce ? undefined : { y: -6, transition: { duration: 0.4 } }
              }
              className="group relative flex h-full flex-col bg-ink p-8 transition-colors hover:bg-ink-3 md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <motion.span
                  className="font-display text-5xl text-amber/30"
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: i * 0.12 + 0.2,
                    ease: "easeOut",
                  }}
                >
                  {p.n}
                </motion.span>
                <span className="text-xs tracking-[0.3em] text-mute">
                  {p.he}
                </span>
              </div>

              <h3 className="mt-10 text-2xl text-bone">{p.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-bone-2/85">
                {p.body}
              </p>

              {/* underline that animates on hover */}
              <span className="absolute inset-x-8 bottom-8 h-px origin-right scale-x-0 bg-amber transition-transform duration-700 group-hover:scale-x-100 md:inset-x-10" />

              {/* breathing glow on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(200,155,74,0.12), transparent 70%)",
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

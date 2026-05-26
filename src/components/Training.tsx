"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const programs = [
  {
    title: "אימון קבוצתי",
    sub: "Group Training",
    body: "מפגשים שבועיים. תרגול עקרונות התנועה הטבעית, יישומי לחימה, ותרגולי זרימה דינמיים — בכל הרמות.",
    meta: "פתוח לחדשים",
  },
  {
    title: "אימון אישי",
    sub: "Private Coaching",
    body: "מסלול מותאם אישית: עבודה ממוקדת על הביומכניקה האישית שלך, יכולת לחימה, או שיקום פציעות ישנות דרך תנועה.",
    meta: "בתיאום מראש",
  },
  {
    title: "טיפול בתנועה",
    sub: "Movement Therapy",
    body: "תוכנית לטיפול בכאבי גב, יתר לחץ דם, סטרס כרוני וקשיים מוטוריים — באמצעות חזרה לתבניות התנועה הראשוניות של הגוף.",
    meta: "מותאם רפואית",
  },
  {
    title: "סדנאות והכשרת מדריכים",
    sub: "Workshops & Certification",
    body: "סדנאות עומק לפרקטיקאים מנוסים, מאמני אמנויות לחימה, ומטפלים בתנועה הרוצים להעמיק בעקרונות Kinegenesis.",
    meta: "בארץ ובחו״ל",
  },
];

export function Training() {
  const reduce = useReducedMotion();
  return (
    <section id="training" className="relative bg-ink-2 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 md:mb-24 max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-amber/80">
            05 — אימונים
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            ארבעה מסלולים.{" "}
            <span className="text-amber">שיטה אחת.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative h-full overflow-hidden border hairline bg-ink p-8 transition-colors hover:border-amber/40 md:p-10"
            >
              {/* corner accent */}
              <span
                aria-hidden
                className="absolute right-0 top-0 h-10 w-10 border-r border-t border-amber/0 transition-all duration-500 group-hover:border-amber/60"
              />
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-amber/0 transition-all duration-500 group-hover:border-amber/60"
              />

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl text-bone transition-colors group-hover:text-amber">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs tracking-[0.3em] text-mute">
                    {p.sub}
                  </p>
                </div>
                <span className="rounded-full border border-amber/30 px-3 py-1 text-[10px] tracking-widest text-amber">
                  {p.meta}
                </span>
              </div>
              <p className="mt-8 text-base leading-relaxed text-bone-2/85">
                {p.body}
              </p>

              <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-amber transition-transform duration-700 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

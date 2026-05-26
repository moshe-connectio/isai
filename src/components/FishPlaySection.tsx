"use client";

import { FishPlay } from "./FishPlay";
import { Reveal } from "./Reveal";

export function FishPlaySection() {
  return (
    <section id="fish-play" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <p className="text-xs tracking-[0.4em] text-amber/80">
            03 — תרגול היסוד
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl leading-tight">
            <span className="text-amber">משחק הדגים</span>
            <br />
            הבלתי-נגמר.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-bone-2">
            <p>
              דיאגרמה מקורית של משה גורליק, 2007. שתי הזרועות נעות במעגלים
              מתואמים, כל אחת מציירת לולאה הנקרעת מתוך המעגל הגדול וחוזרת אליו —
              כתנועת זנב של דג בזרם.
            </p>
            <p>
              זהו תרגול היסוד של ISAI: למידת התנועה הספירלית, חיבור הציר המרכזי,
              והתאמת שתי הזרועות לקצב אחד. מתוך המעגל הזה צומחות כל המכות, ההגנות
              והתפיסות של השיטה.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-mute">
              <li className="flex items-center gap-2">
                <span className="h-px w-4 bg-amber/60" />
                ציר מרכזי יציב
              </li>
              <li className="flex items-center gap-2">
                <span className="h-px w-4 bg-amber/60" />
                ספירלות סימולטניות
              </li>
              <li className="flex items-center gap-2">
                <span className="h-px w-4 bg-amber/60" />
                כיוון השעון
              </li>
              <li className="flex items-center gap-2">
                <span className="h-px w-4 bg-amber/60" />
                זרימה ללא קטיעות
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="md:col-span-7 md:col-start-7 flex justify-center md:justify-end">
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full bg-amber/5 blur-3xl" />
              <FishPlay className="relative" size={520} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

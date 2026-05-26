"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, ArrowLeft } from "lucide-react";
import { Reveal } from "./Reveal";

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 7.5a3 3 0 0 0-2.1-2.1C18 5 12 5 12 5s-6 0-7.9.4A3 3 0 0 0 2 7.5 31 31 0 0 0 1.5 12 31 31 0 0 0 2 16.5a3 3 0 0 0 2.1 2.1C6 19 12 19 12 19s6 0 7.9-.4A3 3 0 0 0 22 16.5 31 31 0 0 0 22.5 12 31 31 0 0 0 22 7.5Z" />
      <path d="m10 15 5-3-5-3v6Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Contact() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-amber/80">
            07 — צרו קשר
          </p>
          <h2 className="mt-6 text-5xl md:text-7xl">
            הצעד הראשון
            <br />
            הוא{" "}
            <span className="relative inline-block text-amber">
              להפסיק לכפות
              <motion.span
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "right" }}
                className="absolute inset-x-0 -bottom-1 h-px bg-amber/70"
              />
            </span>
            .
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone-2">
            מוזמנים לאימון ניסיון, להתייעצות, או פשוט לשיחה. ISAI אינה דורשת
            רקע באמנויות לחימה, ואינה מתבססת על גיל או כושר מקדים.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-3">
          <Reveal className="bg-ink">
            <a
              href="mailto:info@isai.co.il"
              className="group flex h-full flex-col gap-3 p-8 transition-colors hover:bg-ink-2"
            >
              <Mail size={20} className="text-amber transition-transform group-hover:-translate-y-1" />
              <span className="text-xs tracking-[0.3em] text-mute">EMAIL</span>
              <span className="text-lg text-bone group-hover:text-amber">
                info@isai.co.il
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.08} className="bg-ink">
            <div className="flex h-full flex-col gap-3 p-8">
              <MapPin size={20} className="text-amber" />
              <span className="text-xs tracking-[0.3em] text-mute">מיקום</span>
              <span className="text-lg text-bone">
                ישראל — אונליין ופרונטלי
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.16} className="bg-ink">
            <div className="flex h-full flex-col gap-3 p-8">
              <span className="text-xs tracking-[0.3em] text-mute">FOLLOW</span>
              <div className="mt-1 flex gap-4">
                <motion.a
                  href="https://www.instagram.com/isaimartial/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
                  className="text-bone-2 hover:text-amber"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={22} />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/c/ISAImartialarts/videos"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
                  className="text-bone-2 hover:text-amber"
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={22} />
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <motion.a
            href="mailto:info@isai.co.il?subject=אימון%20ניסיון%20ב-ISAI"
            whileHover={reduce ? undefined : { x: -8 }}
            className="group mt-16 inline-flex items-center gap-3 text-lg text-amber"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            תיאום אימון ניסיון
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

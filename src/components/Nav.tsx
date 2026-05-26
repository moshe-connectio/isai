"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#philosophy", label: "פילוסופיה" },
  { href: "#pillars", label: "העקרונות" },
  { href: "#levels", label: "שמונה הרבדים" },
  { href: "#founder", label: "המייסד" },
  { href: "#training", label: "אימונים" },
  { href: "#videos", label: "וידאו" },
  { href: "#contact", label: "צור קשר" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-ink/70 border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold tracking-wide text-bone">
            ISAI
          </span>
          <span className="hidden text-xs tracking-[0.3em] text-mute sm:inline">
            איסאי
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-bone-2 transition-colors hover:text-amber"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-amber/60 px-5 py-2 text-sm text-amber transition-all hover:bg-amber hover:text-ink md:inline-block"
        >
          הצטרפו לאימון
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-bone"
          aria-label="תפריט"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t hairline bg-ink/95 backdrop-blur">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-bone-2 hover:text-amber"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-amber/60 py-2 text-center text-amber"
            >
              הצטרפו לאימון
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

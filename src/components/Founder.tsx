import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { Trigram } from "./Trigram";

const facts = [
  "מעל 40 שנות תרגול ומחקר באמנויות לחימה, תנועה טבעית ויוגה",
  "M.Sc. במתמטיקה שימושית ומדעי המחשב — בנוסף להשכלה במוזיקה וציור",
  "מזכ״ל לשעבר של איגוד ה-Wushu (קונג פו) בישראל",
  "שופט אירופי מוסמך באמנויות לחימה סיניות",
  "לימד ISAI במכון וינגייט ובמכללת DATA",
  "אימן שומרי ראש, סלקטורים, וספורטאי עילית — חברי נבחרת הג׳ודו ואלוף אירופה צעירים",
];

const stats: { value: number; suffix: string; label: string }[] = [
  { value: 40, suffix: "+", label: "שנות תרגול" },
  { value: 8, suffix: "", label: "רבדים אבולוציוניים" },
  { value: 30, suffix: "+", label: "שנות הוראה" },
];

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden px-6 py-28 md:py-40">
      {/* decorative trigram */}
      <div className="pointer-events-none absolute -left-32 top-1/3 opacity-30">
        <Trigram size={420} />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xs tracking-[0.4em] text-amber/80">
            04 — המייסד
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            מוניה
            <br />
            גורליק
          </h2>
          <p className="mt-6 text-sm tracking-[0.25em] text-mute">
            MONYA GORELIK
          </p>

          <p className="mt-10 text-lg leading-relaxed text-bone-2">
            חוקר, מורה ופרקטיקאי. נע בין מתמטיקה שימושית ללחימה מלאת-מגע, בין
            דאואיזם עתיק לעצבי השרירים. פיתח את ISAI כמסגרת אחת המאחדת את כל
            התחומים הללו — מדע מדויק, אמנות חיה, ולחימה אמיתית.
          </p>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t hairline pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl text-amber md:text-5xl">
                    <CountUp to={s.value} suffix={s.suffix} duration={2.2} />
                  </dt>
                  <dd className="mt-2 text-xs tracking-[0.2em] text-mute">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <ul className="space-y-px">
              {facts.map((f, i) => (
                <li
                  key={i}
                  className="group grid grid-cols-12 gap-4 border-t hairline py-5 transition-colors last:border-b hover:bg-ink-2"
                >
                  <span className="col-span-1 text-xs text-amber/70 transition-colors group-hover:text-amber">
                    0{i + 1}
                  </span>
                  <span className="col-span-11 text-base leading-relaxed text-bone-2 transition-colors group-hover:text-bone">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-ink-2 px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="text-xs tracking-[0.4em] text-amber/80">
            01 — פילוסופיה
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            לחימה היא
            <br />
            <span className="text-amber">חזרה אל הטבע</span>.
          </h2>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6 space-y-8 text-lg leading-relaxed text-bone-2">
          <Reveal delay={0.05}>
            <p>
              ב-ISAI איננו מאמנים את הגוף להיות משהו שהוא לא. אנחנו מסירים את
              השכבות התרבותיות, ההרגלים והעיוותים שצברנו במהלך החיים — וחושפים
              את התנועה הראשונית, האותנטית, שאותה ידע התינוק לפני שלמד לדבר.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              התוצאה היא לחימה חסכונית, מהירה, מדויקת, חמקנית, ובלתי-צפויה —
              משום שהיא נובעת מהמערכת הביולוגית עצמה, ולא מתבנית שנכפתה עליה.
              זוהי לחימה שאינה מתעייפת, אינה נשברת, ואינה מזדקנת באותו קצב.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <blockquote className="border-r-2 border-amber pr-6 text-xl italic text-bone">
              ״טבע האם, לא אני ולא אף מאמן אחר, חידד את התנועה הזו במשך מאות
              מיליוני שנים. תפקידי הוא רק להסיר את מה שמסתיר אותה.״
              <footer className="mt-3 text-sm not-italic text-mute">
                — מוניה גורליק, מייסד ISAI
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

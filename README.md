# ISAI — אתר תדמית

> **ISAI** — Israeli Science & Art of Integrity
> אמנות הלחימה של הזרימה חסרת הצורה (The Martial Art of Formless Flow)

אתר תדמית חד-עמודי (single-page) בעברית RTL לאמנות הלחימה הישראלית **ISAI**, שנוסדה ע״י מוניה גורליק. האתר מציג את הפילוסופיה, שלושת היסודות, שמונה הרבדים האבולוציוניים, הסיפור של המייסד, מסלולי האימון ופרטי יצירת קשר.

🌐 **Live:** https://isai-website-omega.vercel.app

---

## ✨ עיצוב וזהות מותגית

- **שפה:** עברית מלאה, RTL
- **טון:** מקצועי, אמין, רוחני אך מדויק — מתאים לדרך חיים ולא רק לאימון
- **פלטה כהה:**
  - `ink` (#0a0a0b) — רקע ראשי, דיו
  - `bone` (#f3ece0) — טקסט נקי, כמו עצם מולבן
  - `amber` (#c89b4a) — צבע הדגשה, זהב עמום (ברונזה / חרס)
  - `blood` (#8a1f1f) — אקצנט נדיר
- **טיפוגרפיה:**
  - `Frank Ruhl Libre` — כותרות, ספרות רומיות, מרכאות
  - `Heebo` — גוף הטקסט
- **טקסטורות:** שכבת `grain` עדינה, קווי `hairline` במקום גבולות כבדים, רעש רדיאלי ככורח חי

---

## 🎞️ אנימציות (framer-motion + scroll-driven)

| רכיב | אנימציה |
|------|---------|
| `ScrollProgress` | פס התקדמות אמבר עליון, spring חלק |
| `Hero` | Parallax רקע, glow רדיאלי "נושם", trigram מסתובב, character-by-character reveal לכותרת, underline נמתח, magnetic CTAs, scroll cue פועם |
| `Marquee` | מצעד אינסופי של 8 עקרונות (שקט · זרימה · כוח · רפיון · שורש · גל · ריקות · שלמות) |
| `Divider` | משיכת מכחול קליגרפית SVG שמציירת את עצמה ב-scroll |
| `Pillars` | כרטיסיות עולות ב-hover, underline אופקי, glow רדיאלי |
| `Levels` | קו ציר זמן אנכי שמצויר לפי scroll progress, נקודות שגדלות ב-hover, שורות מחליקות אחת-אחת |
| `Founder` | `CountUp` מונה אנימטיבי לסטטיסטיקות (40+ / 8 / 30+), trigram דקורטיבי ברקע |
| `Training` | סוגריים פינתיים אנימטיביים ב-hover, underline נמתח |
| `Contact` | כרטיס מייל אינטראקטיבי, אייקוני SVG מותאמים אישית (Instagram, YouTube), underline אנימטיבי |
| `MagneticButton` | כפתורים שנמשכים אל הסמן (parallax פנימי) |
| `Trigram` | טבעת ה-Bagua (8 טריגרמות דאואיסטיות) מסתובבת נגד טבעת היין-יאנג הפנימית |
| `Reveal` | wrapper גנרי לכניסת אלמנטים ב-scroll |

כל האנימציות מכבדות `prefers-reduced-motion`.

---

## 🏗️ Stack טכנולוגי

| | |
|---|---|
| Framework | **Next.js 16.2.6** (App Router, Turbopack) |
| React | **19.2.4** |
| TypeScript | 5 |
| Styling | **Tailwind CSS v4** (CSS-first config דרך `@theme inline`) |
| Animation | **framer-motion 12** |
| Icons | `lucide-react` + אייקוני SVG מותאמים |
| Fonts | `next/font/google` — Frank Ruhl Libre + Heebo |
| Hosting | **Vercel** |

> ⚠️ **הערה:** זה Next.js 16 — חלק מה-APIs שונים מ-Next 14/15. ראה `AGENTS.md`.

---

## 📁 מבנה הפרויקט

```
src/
├── app/
│   ├── layout.tsx          ← RTL, fonts, metadata, ScrollProgress
│   ├── page.tsx            ← הרכבת 7 הסקציות + Marquee + Dividers
│   └── globals.css         ← @theme + טוקנים של עיצוב + .grain, .hairline
└── components/
    ├── Nav.tsx             ← ניווט sticky, blur, מובייל
    ├── Hero.tsx            ← פתיחה (אנימציה כבדה)
    ├── FlowBackground.tsx  ← קווי גל SVG מונפשים ברקע ההירו
    ├── Marquee.tsx         ← מצעד עקרונות
    ├── Divider.tsx         ← מפריד קליגרפי בין סקציות
    ├── Philosophy.tsx      ← 01 — פילוסופיה
    ├── Pillars.tsx         ← 02 — שלושת היסודות
    ├── Levels.tsx          ← 03 — שמונה הרבדים
    ├── Founder.tsx         ← 04 — מוניה גורליק
    ├── Training.tsx        ← 05 — מסלולי אימון
    ├── Contact.tsx         ← 06 — יצירת קשר
    ├── Footer.tsx
    ├── ScrollProgress.tsx  ← פס התקדמות עליון
    ├── Trigram.tsx         ← Bagua + יין-יאנג מסתובב
    ├── MagneticButton.tsx  ← כפתור מגנטי
    ├── CountUp.tsx         ← מונה אנימטיבי
    └── Reveal.tsx          ← wrapper לאנימציית כניסה
```

---

## 🧠 תוכן ומסרים

האתר בנוי סביב 6 סקציות (ממוספרות 01–06) + Hero + Footer:

- **01 — פילוסופיה:** ״לחימה היא חזרה אל הטבע״
- **02 — שלושת היסודות:** Kinegenesis (קינגנזיס) · Formless Flow (זרימה חסרת צורה) · Natural Movement (תנועה טבעית)
- **03 — שמונה הרבדים:** אמבה → דג → דו-חיים → זוחלים → יונקים → קופים → אדם → האדם של המחר. כל רובד שולט בקבוצת מפרקים.
- **04 — המייסד:** מוניה גורליק — 40+ שנות תרגול, M.Sc. במתמטיקה שימושית, מזכ״ל לשעבר של איגוד Wushu בישראל, אימן ספורטאי עילית
- **05 — אימונים:** קבוצתי / אישי / טיפול בתנועה / סדנאות והכשרת מדריכים
- **06 — צרו קשר:** ״הצעד הראשון הוא להפסיק לכפות״

---

## 🚀 פיתוח מקומי

```bash
# התקנה
npm install

# שרת פיתוח (http://localhost:3000)
npm run dev

# Build לפרודקשן
npm run build

# Lint
npm run lint
```

---

## ☁️ Deployment

האתר מתפרסם אוטומטית ב-Vercel בכל push ל-`main`.
מחובר ל-GitHub: `moshe-connectio/isai`.

לדפלוי ידני:
```bash
npx vercel --prod
```

---

## 📝 רישיון

זכויות יוצרים — ISAI / מוניה גורליק. השימוש בקוד מותנה באישור.

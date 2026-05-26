import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-display",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-body",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISAI — אמנות לחימה ישראלית | The Martial Art of Formless Flow",
  description:
    "ISAI — Israeli Science & Art of Integrity. אמנות לחימה ישראלית המבוססת על תנועה טבעית, ביומכניקה פרקטלית (Kinegenesis) ועקרונות Formless Flow. נוסדה ע״י משה גורליק.",
  keywords: [
    "ISAI",
    "איסאי",
    "אמנות לחימה ישראלית",
    "תנועה טבעית",
    "Formless Flow",
    "Kinegenesis",
    "Moshe Gorelik",
    "משה גורליק",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frankRuhl.variable} ${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone selection:bg-amber/30 selection:text-bone">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

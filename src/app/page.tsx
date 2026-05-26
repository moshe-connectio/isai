import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Pillars } from "@/components/Pillars";
import { Levels } from "@/components/Levels";
import { Founder } from "@/components/Founder";
import { Training } from "@/components/Training";
import { Contact } from "@/components/Contact";
import { Videos } from "@/components/Videos";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <Marquee />
        <Philosophy />
        <Divider />
        <Pillars />
        <Divider flip />
        <Levels />
        <Divider />
        <Founder />
        <Divider flip />
        <Training />
        <Divider />
        <Videos />
        <Divider flip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

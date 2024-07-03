import Image from "next/image";
import { Hero } from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encription from "@/components/main/Encription";
import Projects from "@/components/main/Projects";
import CommunitySection from "@/components/main/CommunitySection";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encription />
        <Projects />
        <CommunitySection />
        <Footer />
      </div>
    </main>
  );
}

"use client";

import CTA from "@/components/cta";
import Particles from "@/components/ui/particles";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Logos from "@/components/logos";
import { HeroCard } from "@/components/hero-card";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <Header />

        <CTA />

        <HeroCard />
      </section>

      <Logos />

      <Footer />

      <Particles
        quantityDesktop={500}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  );
}

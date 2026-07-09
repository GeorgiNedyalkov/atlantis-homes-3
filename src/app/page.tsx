import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { FeaturesTabs } from "@/components/FeaturesTabs";
import { AboutResidences } from "@/components/AboutResidences";
import { Location } from "@/components/Location";
import { CtaBanner } from "@/components/CtaBanner";
import { AboutCompany } from "@/components/AboutCompany";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Intro />
        <FeatureShowcase />
        <FeaturesTabs />
        <AboutResidences />
        <Location />
        <CtaBanner />
        <AboutCompany />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

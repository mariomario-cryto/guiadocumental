import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Disclaimer from "@/components/Disclaimer";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ComplianceSection from "@/components/ComplianceSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Disclaimer />
        <Features />
        <Process />
        <Testimonials />
        <ComplianceSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Disclaimer from "@/components/Disclaimer";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ComplianceSection from "@/components/ComplianceSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Disclaimer />
        <Features />
        <Process />
        <Testimonials />
        <ComplianceSection />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

import Hero from "@/components/Hero";
import About from "@/components/About";
import CategorySections from "@/components/CategorySections";
import CertificationsGrid from "@/components/CertificationsGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <CategorySections />
      <CertificationsGrid />
      <Contact />
    </main>
  );
}

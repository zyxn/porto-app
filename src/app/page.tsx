import HeroSection from "@/app/components/HeroSection/HeroSection";
import AboutSection from "@/app/components/AboutSection/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection/ProjectSection";
import ContactSection from "@/app/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

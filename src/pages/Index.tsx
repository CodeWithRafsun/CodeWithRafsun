import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { PlatformSection } from '@/components/PlatformSection';
import { InitiativeSection } from '@/components/InitiativeSection';
import { EducationSection } from '@/components/EducationSection';
import { VisionSection } from '@/components/VisionSection';
import { SocialSection } from '@/components/SocialSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PlatformSection />
        <InitiativeSection />
        <EducationSection />
        <VisionSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

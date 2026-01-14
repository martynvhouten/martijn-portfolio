import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { TechStack } from '@/components/sections/TechStack';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <Process />
      <TechStack />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}

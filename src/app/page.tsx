

import { FooterInfo } from '../components/FooterInfo';
import { WaveDivider } from '../components/WaveDivider';
import charlesLogo from '/public/assets/logo.svg';

import { Header } from '../components/Header';

import { HeroSection } from '@/components/Sections/Hero/HeroSection';
import { AboutSection } from '@/components/Sections/About/AboutSection';
import { ProjectsSection } from '@/components/Sections/Projects/ProjectsSection';

export default function Home() {

  return (
    <div
      id="anchor-top"
      className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col flex-grow">
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </main>

        <div className="w-full bg-zinc-900 laptop:bg-opacity-90">
          <div className="hidden laptop:block">
            <WaveDivider bgTextColor="text-zinc-700" />
          </div>

          <footer className="h-full w-full px-2 pb-6  mt-14 relative flex items-center justify-between laptop:mt-0 laptop:bg-zinc-700">
            <FooterInfo imageUrl={charlesLogo} />
          </footer>
        </div>
      </div>

    </div>
  );
}

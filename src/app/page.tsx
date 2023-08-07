

import { FooterInfo } from './components/FooterInfo';
import { WaveDivider } from './components/WaveDivider';
import charlesLogo from '/public/assets/logo.svg';

import { Header } from './components/Header';

import { Section as Section1 } from './components/Sections/Section1/Section';
import { Section as Section2 } from './components/Sections/Section2/Section';
import { Section as Section3 } from './components/Sections/Section3/Section';

export default function Home() {

  return (
    <div
      id="anchor-top"
      className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col flex-grow">
        <main className="flex-grow">
          <Section1 />
          <Section2 />
          <Section3 />
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

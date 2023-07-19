

import { Menu } from './components/Menu';
import { FooterInfo } from './components/FooterInfo';
import { WaveDivider } from './components/WaveDivider';

import { Section as Section1 } from './components/Sections/Section1/Section';
import { Section as Section2 } from './components/Sections/Section2/Section';
import { Section as Section3 } from './components/Sections/Section3/Section';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="h-10 w-screen p-2 flex justify-between items-center bg-transparent fixed z-50">
        <Menu />
      </header>

      <div className="flex flex-col flex-grow">
        <main className="flex-grow">
          <Section1 />
          <Section2 />
          <Section3 />
        </main>

        <div className="w-full bg-zinc-900 bg-opacity-90">
          <WaveDivider bgTextColor="text-zinc-700" />
          <footer className="h-10 w-full p-2 bg-zinc-700 relative flex items-center justify-between">
            <FooterInfo />
          </footer>
        </div>
      </div>

    </div>
  );
}

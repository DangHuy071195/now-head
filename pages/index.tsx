import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
import Hero from '@/components/layout/Hero';
import About from '@/components/about';
import Exprience from '@/components/experience';
import Works from '@/components/work';
import Feedbacks from '@/components/feedbacks';
import StarCanvas from '@/components/starts-canvas';
import Contact from '@/components/contact';
import Skills from '@/components/skills';
import ShowCase from '@/components/showcase';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div style={{}}>
        {/* <ShowCase /> */}
        <Hero />
        <About />
        <Skills />
        <Exprience />
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0 h-screen flex items-center justify-start px-96">
          <StarCanvas />
          <Contact />
        </div>
      </div>
    </>
  );
}

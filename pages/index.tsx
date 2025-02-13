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
import Head from 'next/head';
import axios from 'axios';
import http from '@/libs/http';
import { desc } from 'framer-motion/client';

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
}
const inter = Inter({ subsets: ['latin'] });
interface HomePropsI {
  services: Service[];
}

export const metadata = {
  title: 'Huy Nguyen - NextJs Freelancer',
  description: `I'm Huy Nguyen -  Fontend Freelancer with 4 years of experience in web development.`,
};

const Home: React.FC<HomePropsI> = ({ services }) => {
  return (
    <>
      <Head>
        <title>Huy Nguyen - NextJs Freelancer</title>
        <meta
          name="description"
          content="I'm Huy Nguyen - 
          Fontend Freelancer 
          I specialize in front-end development and UI/UX design.
          I also develop RESTful APIs and microservices for web and mobile applications.
          "
        />
      </Head>
      <div style={{}}>
        {/* <ShowCase /> */}
        <Hero />
        <About services={services} />
        <Skills />
        <Exprience />
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0 h-screen flex items-center justify-start">
          <StarCanvas />
          {/* <Contact /> */}
        </div>
      </div>
    </>
  );
};

export default Home;

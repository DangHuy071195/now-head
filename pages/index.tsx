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
import { Metadata } from 'next';

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
  title: 'Huy Nguyen - React/NextJs Developer',
  description: `I'm Huy Nguyen -  Fontend Developer with 4 years of experience in web development.`,
  openGraph: {
    images: [
      {
        url: 'https://next-js-bucket.s3.ap-southeast-1.amazonaws.com/avatar.jpg', // Avatar as the Open Graph image
        width: 600,
        height: 600,
        alt: 'Avatar',
      },
    ],
  },
};

const Home: React.FC<HomePropsI> = ({ services }) => {
  return (
    <>
      <Head>
        <title>Nguyễn Đăng Huy - Frontend Developer</title>
        <meta
          property="og:image"
          content={`/avatar.jpg`}
        />

        <meta
          property="og:type"
          content="profile"
        />
        <meta
          property="og:title"
          content={`Nguyễn Đăng Huy - Frontend Developer`}
        />
        <meta
          property="og:description"
          content={`
        I'm Huy Nguyen -  Fontend Developer with 4 years of experience in web development.
          `}
        />

        <meta
          property="og:type"
          content="profile"
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

// import About from '@/components/about';
// import Exprience from '@/components/experience';
// import Hero from '@/components/layout/Hero';
// import Skills from '@/components/skills';
import { HashLoader } from 'react-spinners';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const customLoader = async (path: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay for 2 seconds
  return import(path);
};
const About = dynamic(() => import('@/components/about'));
const Hero = dynamic(() => import('@/components/layout/Hero'));
const Skills = dynamic(() => import('@/components/skills'));
const Exprience = dynamic(() => import('@/components/experience'));

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
        <title>{metadata.title}</title>
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta
          name="description"
          content={metadata.description}
        />
        <link
          rel="icon"
          href="/js.png"
          type="image/png"
        />
      </Head>
      <Suspense
        fallback={
          <HashLoader
            color="#45f771"
            className=""
          />
        }>
        <Hero />
        <About />
        <Skills />
        <Exprience />
      </Suspense>
    </>
  );
};

export default Home;

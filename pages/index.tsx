import About from '@/components/about';
import Exprience from '@/components/experience';
import Hero from '@/components/layout/Hero';
import Skills from '@/components/skills';
import { Inter } from 'next/font/google';
import Head from 'next/head';

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
        {/* <div className="relative z-0 h-screen flex items-center justify-start">
          <StarCanvas />
        </div> */}
      </div>
    </>
  );
};

export default Home;

import { HashLoader } from 'react-spinners';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Hero from '@/components/layout/Hero';
import Skills from '@/components/skills';
import Exprience from '@/components/experience';
import Services from '@/components/about';

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

      <div>
        <Hero />
        <Services />
        <Skills />
        <Exprience />
      </div>
    </>
  );
};

export default Home;

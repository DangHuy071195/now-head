import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ShinyText from '../shinny-text';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Rocket } from 'lucide-react';

const ProjectCard = dynamic(() => import('../project-card'), { ssr: false });
const HeroVisualization = dynamic(() => import('../hero-visualization'), { 
  ssr: false,
  loading: () => <div className="w-full h-[400px] animate-pulse bg-purple-500/10 rounded-lg" />
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Hero = () => {
  const refHeroDesc = React.useRef<HTMLDivElement>(null);
  const [heightOfLineHero, setHeightOfLineHero] = useState(0);
  const [showVisualization, setShowVisualization] = useState(false);

  useEffect(() => {
    if (refHeroDesc.current) {
      const height = refHeroDesc.current.clientHeight;
      setHeightOfLineHero(height);
    }
    // Load visualization after LCP
    const timer = setTimeout(() => setShowVisualization(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative w-full max-w-7xl h-auto mx-auto mt-24 md:mt-32 px-4 md:px-0">
        <div className="inset-0 mx-auto flex flex-grow items-start gap-3 md:gap-5 relative">
          <motion.div
            initial={{ opacity: 0, left: '-10%' }}
            animate={{ opacity: heightOfLineHero ? 1 : 0, left: heightOfLineHero ? '-1.8rem' : '-5%' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            className="hidden md:flex flex-col justify-center items-center absolute left-0 top-0"
            style={{ height: heightOfLineHero }}>
            {/* <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 0 rgba(145, 94, 255, 0.7)',
                  '0 0 0 10px rgba(145, 94, 255, 0)',
                  '0 0 0 0 rgba(145, 94, 255, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-5 rounded-full bg-[#915eff]"
            /> */}
            {/* <div
              className="w-1 "
              style={{ height: '100%', background: 'linear-gradient(transparent, #7C72FF 30%)' }}
            /> */}
          </motion.div>
          <motion.div 
            ref={refHeroDesc}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-[#915eff] flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3"
            >
              <ShinyText
                text="Hello, I'm Huy."
                disabled={false}
                speed={3}
                className="custom-class text-2xl md:text-6xl lg:text-7xl font-bold"
                baseColor="#7C72FF"
                secondColor="#722bd6"
                lastColor="#2a1ce6"
              />
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 animate-pulse" />
            </motion.h1>
            <motion.ul
              variants={containerVariants}
              className="mt-4 space-y-4"
              style={{ listStyle: 'inside' }}>
              <motion.li variants={itemVariants} className="flex items-start gap-4 text-sm md:text-lg leading-relaxed text-gray-300">
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mt-1 flex-shrink-0" />
                <span>
                  I'm a React Developer with over 4 years of experience in web development, specializing in building
                  user interfaces and web applications using React JS, Next JS, and TypeScript.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-4 text-sm md:text-lg leading-relaxed text-gray-300">
                <Rocket className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mt-1 flex-shrink-0" />
                <span>
                  I have a solid understanding of React's core concepts, including state management, component
                  lifecycle, and hooks. I am also familiar with popular libraries and tools in the React ecosystem, such
                  as Redux, React Router, and styled-components etc.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-4 text-sm md:text-lg leading-relaxed text-gray-300">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mt-1 flex-shrink-0" />
                <span>
                  I have a strong understanding of web development principles, including responsive design, performance
                  optimization, and accessibility.
                </span>
                <br />
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        {showVisualization && (
          <div className="w-full lg:w-1/2 justify-center items-center mt-[80px] hidden md:flex mx-auto">
            <HeroVisualization />
          </div>
        )}
      </section>
      <section id="projects" className="flex flex-col items-center w-full max-w-7xl mx-auto relative px-4 md:px-0">
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ShinyText
            text="Featured Projects"
            disabled={false}
            speed={3}
            className="custom-class text-3xl md:text-5xl font-bold mt-[2rem] md:mt-[4.4rem]"
            baseColor="#915eff"
            secondColor="#7C72FF"
            lastColor="#6A5ACD"
          />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10 pb-10 md:pb-16"
        >
          <ProjectCard
            title="AI Agent Platform"
            description="Advanced AI platform with multi-agent orchestration and real-time processing capabilities"
            status="live"
            progress="80%"
            link="https://ai-gent-fe.vercel.app"
            tags={['Next.js', 'AI', 'TypeScript', 'TailwindCSS']}
            date="Jan 2026"
          />
          <ProjectCard
            title="E-commerce Platform"
            description="Full-featured online shopping platform with payment integration and inventory management"
            status="in-progress"
            progress="70%"
            tags={['React', 'Node.js', 'MongoDB']}
            date="Dec 2025"
          />
          <ProjectCard
            title="E-Learning Platform"
            description="Interactive learning management system with video streaming and progress tracking"
            status="planning"
            progress="12%"
            tags={['Next.js', 'PostgreSQL', 'WebRTC']}
            date="Nov 2025"
          />
          <ProjectCard
            title="Real-time Chat App"
            description="Scalable messaging application with end-to-end encryption and media sharing"
            status="in-progress"
            progress="45%"
            tags={['React', 'Socket.io', 'Redis']}
            date="Oct 2025"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;

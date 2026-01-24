import React from 'react';
import dynamic from 'next/dynamic';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

const StarCanvas = dynamic(() => import('../starts-canvas'), { ssr: false });

const experiences = [
  {
    isEnd: true,
    date: 'Aug 2024-Present',
    icon: 'fa-brands fa-react',
    iconBg: ['#915eff', '#7C72FF 80%', '#6A5ACD'],
    title: 'React.js/Next.js Developer',
    company_name: 'NTQ Solutions JSC',
    points: [
      'Developing large-scale social networking platform with real-time features for team of 20 members (5 FE, 6 BE, 4 QA, 2 BA, 3 DevOps)',
      'Implementing real-time chat and video call functionality using Socket.IO and WebRTC',
      'Building responsive user interface with Next.js, React.js, TypeScript, and Tailwind CSS',
      'Integrated real-time notifications system for user interactions',
      'Delivered core features: real-time messaging with typing indicators, video/audio calling with screen sharing, user profile management, and news feed with infinite scroll',
      'Collaborating with large cross-functional team using Agile/Scrum methodology',
    ],
  },
  {
    date: '2023-Aug 2024',
    icon: 'fa-brands fa-node-js',
    iconBg: ['#7C72FF', '#8d3bd9 80%', '#783dd6'],
    title: 'Web,App,Chrome Extension Developer',
    company_name: 'Maxtrust',
    points: [
      'Development web app, chrome extension for emcommerce and logistic',
      'Collaborated with cross-functional teams to deliver high-quality products',
    ],
    isEnd: true,
  },
  {
    date: '2021-2023',
    icon: 'fa-brands fa-node-js',
    iconBg: ['#7C72FF', '#2DA44E 80%', '#3FB950'],
    title: 'React JS Developer',
    company_name: 'Gobiz',
    points: [
      'Build my company product about Logistic base on React.js with typescript, and chrome extensions...',
      'Worked closely with designers to implement UI/UX improvements',
      'Optimized web applications for maximum speed and scalability',
      'Developed e-commerce websites for fullfillment logistics',
    ],
    isEnd: true,
  },
  {
    isMiddle: true,
    date: '2020-2021',
    icon: 'fa-brands fa-node-js',
    iconBg: ['#3fb950', '#bacc71', '#a0722e'],
    title: 'MERN, Blockchain FREHSER',
    company_name: 'VMO',
    points: [
      'Make a web app  for user can be create more token standard through smartcontrat',
      'Make platform, money market protocol, allows lenders to provide loans and borrowers to make loans. From there users can earn interest in cryptocurrency based on VENUS protocol',
      'Support FE to fix production bugs for satellite projects',
    ],
  },
  // {
  //   date: '2020-2021',
  //   icon: 'fa-brands fa-node-js',
  //   iconBg: ['#7C72FF', '#7C72FF'],
  //   title: 'PHP Developer',
  //   company_name: 'MOR JSC',
  //   points: [
  //     'Built RESTful APIs with PHP, CodeIgniter and MySQL',
  //     'Integrated third-party APIs to enhance application functionality',
  //   ],
  //   isEnd: true,
  // },
  {
    date: '2017-2020',
    icon: 'fa-brands fa-node-js',
    iconBg: ['#33b3ae', 'transparent'],
    title: 'Student at',
    company_name: 'CodeGym, Aptech',
    points: ['CodeGym .Programming training center '],
    isEnd: true,
  },
];

const Exprience = () => {
  return (
    <section
      id="experienced"
      className="flex items-center flex-col pt-[2rem] md:pt-[4.4rem] relative px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[#aaa6c3] text-center text-3xl md:text-6xl font-bold mb-12 md:mb-16`}>What i have done so far</h2>
      </motion.div>
      {/* <h2 className={classes.title}>Work Experience</h2> */}
      <div className="flex flex-col items-start w-full max-w-[95vw] md:max-w-[60rem] mx-auto pb-8 md:pb-16 px-4 md:px-0">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            index={index}
            experience={experience}
          />
        ))}
      </div>
      <StarCanvas />
    </section>
  );
};

export default Exprience;

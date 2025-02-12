import React from 'react';

import classes from './index.module.css';
import ExperienceCard from './ExperienceCard';
import { VerticalTimeline } from 'react-vertical-timeline-component';
const experiences = [
  {
    isEnd: true,
    date: '2023-Present',
    icon: 'fa-brands fa-node-js',
    iconBg: '#7C72FF',
    title: 'Web,App,Chrome Extension Developer',
    company_name: 'Maxtrust',
    points: [
      'Development web app, chrome extension for emcommerce and logistic',
      'Collaborated with cross-functional teams to deliver high-quality products',
    ],
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
    iconBg: ['#3fb950', '#71cc82'],
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
      className="flex items-center flex-col pt-[10rem]">
      <h2 className={`${classes.heading} text-center text-[24px] mb-[24px]`}>What i have done so far</h2>
      {/* <h2 className={classes.title}>Work Experience</h2> */}
      <div className={classes['experiences']}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default Exprience;

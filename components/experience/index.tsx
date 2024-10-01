import React from 'react';

import classes from './index.module.css';
import ExperienceCard from './ExperienceCard';
import { VerticalTimeline } from 'react-vertical-timeline-component';
const experiences = [
  {
    isStart: true,
    date: '2019 - 2021',
    icon: 'fa-brands fa-node-js',
    iconBg: '#7C72FF ',
    title: 'Session about where from start developer',
    company_name: 'VMO Company',
    points: [
      'What kind of tech you need follow and focus its',
      'Collaborated with cross-functional teams to deliver high-quality products',
      'Implemented CI/CD pipelines to improve deployment processes',
      'Developer blockchain applications using Ethereum and Solidity',
    ],
  },
  {
    date: '2022 - 2024',
    icon: 'fa-brands fa-node-js',
    iconBg: ['#7C72FF', '#2DA44E 80%', '#3FB950'],
    title: 'Evol multiple skilss',
    company_name: 'Gobiz Company',
    points: [
      'Created responsive user interfaces using HTML, CSS, and JavaScript',
      'Worked closely with designers to implement UI/UX improvements',
      'Optimized web applications for maximum speed and scalability',
      'Developed e-commerce websites for fullfillment logistics',
    ],
    isStart: true,
  },
  {
    isMiddle: true,
    date: '2022 - Present',
    icon: 'fa-brands fa-node-js',
    iconBg: ['#3fb950', '#71cc82'],
    title: 'Senior Software Engineer',
    company_name: 'Tech Company D',
    points: [
      'Leading a team of developers to build scalable web applications',
      'Architecting and implementing complex features and services',
      'Mentoring junior developers and conducting code reviews',
    ],
  },
  {
    date: '2021 - 2022',
    icon: 'fa-brands fa-node-js',
    iconBg: ['#7C72FF', '#7C72FF'],
    title: 'Make it professional',
    company_name: 'Tech Company C',
    points: [
      'Built RESTful APIs with Express and MongoDB',
      'Integrated third-party APIs to enhance application functionality',
      'Ensured cross-browser compatibility and responsiveness',
    ],
    isEnd: true,
  },
];

const Exprience = () => {
  return (
    <div>
      <h2 className={classes.heading}>What i have done so far</h2>
      {/* <h2 className={classes.title}>Work Experience</h2> */}
      <div className="experiences">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Exprience;

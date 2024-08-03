import React from 'react';

import classes from './index.module.css';
import ExperienceCard from './ExperienceCard';
import { VerticalTimeline } from 'react-vertical-timeline-component';
const experiences = [
  {
    date: '2019 - 2020',
    icon: 'fa-brands fa-node-js',
    iconBg: '#e0a82e',
    title: 'Software Engineer',
    company_name: 'Tech Company A',
    points: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality products',
      'Implemented CI/CD pipelines to improve deployment processes',
    ],
  },
  {
    date: '2020 - 2021',
    icon: 'fa-brands fa-node-js',

    iconBg: '#d9534f',
    title: 'Frontend Developer',
    company_name: 'Tech Company B',
    points: [
      'Created responsive user interfaces using HTML, CSS, and JavaScript',
      'Worked closely with designers to implement UI/UX improvements',
      'Optimized web applications for maximum speed and scalability',
    ],
  },
  {
    date: '2021 - 2022',
    icon: 'fa-brands fa-node-js',

    iconBg: '#5bc0de',
    title: 'Full Stack Developer',
    company_name: 'Tech Company C',
    points: [
      'Built RESTful APIs with Express and MongoDB',
      'Integrated third-party APIs to enhance application functionality',
      'Ensured cross-browser compatibility and responsiveness',
    ],
  },
  {
    date: '2022 - Present',
    icon: 'fa-brands fa-node-js',

    iconBg: '#5cb85c',
    title: 'Senior Software Engineer',
    company_name: 'Tech Company D',
    points: [
      'Leading a team of developers to build scalable web applications',
      'Architecting and implementing complex features and services',
      'Mentoring junior developers and conducting code reviews',
    ],
  },
];

const Exprience = () => {
  return (
    <div className={classes.experience}>
      <h2 className={classes.heading}>What i have done so far</h2>
      <h2 className={classes.title}>Work Experience</h2>
      <VerticalTimeline className={classes.verticalTimeline}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Exprience;

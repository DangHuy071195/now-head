import React, { Suspense } from 'react';
import chating from '../../resources/chating.png';
import games from '../../resources/games.png';
import quizz from '../../resources/quizz.png';
import tutorials from '../../resources/tutorials.png';
import BallCanVas from './Ball';
import { div } from 'three/webgpu';
const technologies = [
  {
    name: 'React',
    icon: '/resources/chating.png', // Use public directory path
    iconBg: '#61dafb',
  },
  {
    name: 'Games',
    icon: '/resources/games.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Quizz',
    icon: '/resources/quizz.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Tutorials',
    icon: '/resources/tutorials.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Quizz',
    icon: '/resources/quizz.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Tutorials',
    icon: '/resources/tutorials.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Quizz',
    icon: '/resources/quizz.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Tutorials',
    icon: '/resources/tutorials.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Quizz',
    icon: '/resources/quizz.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Tutorials',
    icon: '/resources/tutorials.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Tutorials',
    icon: '/resources/tutorials.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Quizz',
    icon: '/resources/quizz.png', // Add other technologies here
    iconBg: '#61dafb',
  },
  {
    name: 'Tutorials',
    icon: '/resources/tutorials.png', // Add other technologies here
    iconBg: '#61dafb',
  },
];
const Ball = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-[10px] max-w-[60vw] m-auto">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="w-[120px] h-[120px]">
          <BallCanVas
            key={index}
            icon={tech.icon}
            size={2.75}
          />
        </div>
      ))}
    </div>
  );
};

export default Ball;

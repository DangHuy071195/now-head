import React from 'react';
import classes from './index.module.css';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
const tagColors = ['#61dafb', '#ff6b6b', '#ffd166', '#06d6a0', '#118ab2'];
const projects = [
  {
    title: 'Project 1',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 1',
    image: '/resources/chating.png',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Project 2',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 2',
    image: '/resources/games.png',
    tags: ['React', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Project 3',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 3',
    image: '/resources/quizz.png',
    tags: ['React', 'Firebase', 'Firestore'],
  },
  {
    title: 'Project 4',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 4',
    image: '/resources/tutorials.png',
    tags: ['React', 'Django', 'SQLite'],
  },
  {
    title: 'Project 3',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 3',
    image: '/resources/quizz.png',
    tags: ['React', 'Firebase', 'Firestore'],
  },
  {
    title: 'Project 4',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 4',
    image: '/resources/tutorials.png',
    tags: ['React', 'Django', 'SQLite'],
  },
  {
    title: 'Project 3',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 3',
    image: '/resources/quizz.png',
    tags: ['React', 'Firebase', 'Firestore'],
  },
  {
    title: 'Project 4',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 4',
    image: '/resources/tutorials.png',
    tags: ['React', 'Django', 'SQLite'],
  },
  {
    title: 'Project 3',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 3',
    image: '/resources/quizz.png',
    tags: ['React', 'Firebase', 'Firestore'],
  },
  {
    title: 'Project 4',
    description:
      'Description of Project Description of Project Description of ProjectDescription of ProjectDescription of Project 4',
    image: '/resources/tutorials.png',
    tags: ['React', 'Django', 'SQLite'],
  },
];

const Works = () => {
  return (
    <div className={classes.work}>
      <h2 className={classes.subTitle}>My Work</h2>
      <h3 className={classes.title}>Project</h3>
      <div className={classes.projects}>
        {projects.map((project, index) => (
          <Tilt key={index}>
            <div className={classes.project}>
              <div className="flex justify-between items-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  className={classes.image}
                  width={276}
                  height={80}
                />
              </div>

              <div className={classes.projectInfo}>
                <h3 className={classes.projectTitle}>{project.title}</h3>
                <p className={classes.projectDescription}>{project.description}</p>
                <div className={classes.tags}>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{ color: tagColors[index % tagColors.length] }}
                      className={classes.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Works;

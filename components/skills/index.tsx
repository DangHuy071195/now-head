import React from 'react';
import SkillItem from './SkillItem';
import classes from './index.module.css';

const designSkills = [
  { name: 'Tailwind Css', progress: 85 },
  { name: 'Node JS', progress: 80 },
  { name: 'MongoDB', progress: 70 },
  { name: 'React Native', progress: 85 },
];

const codingSkills = [
  { name: 'HTML/CSS', progress: 90 },
  { name: 'JavaScript', progress: 80 },
  { name: 'React.Js', progress: 85 },
  { name: 'Next.Js', progress: 85 },
];

const Skills = () => {
  return (
    <section id={classes['skills']}>
      <div className={classes['skills__coding']}>
        <h3 className={classes['skills__coding--title']}>Coding Skills</h3>
        {codingSkills.map((skill, index) => (
          <SkillItem
            name={skill.name}
            key={index}
            index={index + 1}
            type="design"
          />
        ))}
      </div>
      <div className={classes['skills__design']}>
        <h3 className={classes['skills__design--title']}>Other Knowledge</h3>

        {designSkills.map((skill, index) => (
          <SkillItem
            name={skill.name}
            key={index}
            index={index + 1}
            type="coding"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

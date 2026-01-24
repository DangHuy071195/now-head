import React from 'react';
import SkillItem from './SkillItem';
import ShinyText from '../shinny-text';

const codingSkills = [
  { name: 'HTML/CSS', progress: 90 },
  { name: 'JavaScript', progress: 85 },
  { name: 'TypeScript', progress: 88 },
  { name: 'React.Js', progress: 90 },
];

const otherKnowledge = [
  { name: 'Next.js', progress: 85 },
  { name: 'Tailwind CSS', progress: 85 },
  { name: 'Node.js', progress: 80 },
  { name: 'MongoDB', progress: 70 },
  { name: 'React Native', progress: 85 },
  { name: 'GraphQL', progress: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-wrap justify-center px-4 py-8 md:p-[calc(1rem+2vw)] max-w-[95vw] md:max-w-[70vw] mx-auto">
      <div className="p-4 md:p-[calc(1rem+2vw)] basis-full md:basis-[40rem] flex-grow">
        <h3 className="text-center">
          <ShinyText
            text="Coding Skills"
            disabled={false}
            speed={3}
            className="text-3xl md:text-6xl font-bold mb-8"
            baseColor={`#915eff`}
            secondColor={`#7C72FF`}
            lastColor={`#6A5ACD`}
          />
        </h3>
        {codingSkills.map((skill, index) => (
          <SkillItem
            name={skill.name}
            key={index}
            index={index}
            progress={skill.progress}
            type="coding"
          />
        ))}
      </div>
      <div className="p-4 md:p-[calc(1rem+2vw)] basis-full md:basis-[40rem] flex-grow">
        <h3 className="text-center">
          <ShinyText
            text="Other Knowledge"
            disabled={false}
            speed={3}
            className="text-3xl md:text-6xl font-bold mb-8"
            baseColor={`#915eff`}
            secondColor={`#7C72FF`}
            lastColor={`#6A5ACD`}
          />
        </h3>
        {otherKnowledge.map((skill, index) => (
          <SkillItem
            name={skill.name}
            key={index}
            index={index}
            progress={skill.progress}
            type="design"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

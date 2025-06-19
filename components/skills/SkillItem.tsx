import React from 'react';
import classes from './index.module.css';
interface SkillItemProps {
  index: number;
  name: string;
  type: string;
}
const SkillItem: React.FC<SkillItemProps> = ({ index, name, type }) => {
  console.log(`Rendering SkillItem: ${name}, Type: ${type} ${index}`);
  return (
    <>
      <h4>{name}</h4>
      <div className={classes[`skills__${type}--progress`]}>
        <span className={classes[`skills__${type}--progress__${index}`]}></span>
      </div>
    </>
  );
};

export default SkillItem;

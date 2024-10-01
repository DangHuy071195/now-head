import Image from 'next/image';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { isArray } from 'lodash';
interface ExperienceCardProps {
  experience: any;
}
import classes from './index.module.css';
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { isStart, isMiddle, isEnd, iconBg } = experience;
  const lineGradiendt = isArray(iconBg) ? `${iconBg[0]} 30%, ${iconBg[1]}` : `${iconBg} 30%`;
  return (
    <div className={classes.experience}>
      <div className={classes['experience-timeline']}>
        <div className="experience-timeline_point">
          <i className={experience.icon}></i>
        </div>
        {/* linear-gradient(#3fb950, #2ea043, transparent) */}
        {/* linear-gradient(#7C72FF, #2DA44E 80%, #3FB950) */}
        <div
          className={classes['experience-timeline_line']}
          style={{
            background: isStart
              ? `linear-gradient(transparent, ${lineGradiendt})`
              : isEnd
                ? `linear-gradient(${lineGradiendt}), transparent`
                : isMiddle
                  ? `linear-gradient(${lineGradiendt}) transparent`
                  : '',
          }}></div>
      </div>
      <div className="experience-timeline_content">
        <span className="text-[3rem]">{experience.title}</span>
        <div className="flex flex-col gap-[8px]">
          {experience.points.map((x: any) => (
            <span
              className="text-[1.4rem] text-[#9198a1]"
              key={x}>
              {x}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

import Image from 'next/image';
import React, { useRef } from 'react';
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
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div className={classes.experience}>
      <div
        className={classes['experience-timeline']}
        style={{ height: ref.current?.offsetHeight }}>
        <div
          className={classes['experience-timeline_point']}
          style={{ color: isArray(iconBg) ? iconBg[0] : iconBg }}>
          <i className={`${experience.icon} `}></i>
        </div>
        {/* linear-gradient(#3fb950, #2ea043, transparent) */}
        {/* linear-gradient(#7C72FF, #2DA44E 80%, #3FB950) */}
        <div
          className={classes['experience-timeline_line']}
          style={{
            background: isStart
              ? `linear-gradient(transparent, ${lineGradiendt})`
              : isEnd
                ? `linear-gradient(${lineGradiendt}, transparent)`
                : isMiddle
                  ? `linear-gradient(${lineGradiendt}, transparent)`
                  : '',
          }}></div>
      </div>
      <div
        className={classes['experience-timeline_content']}
        ref={ref}>
        <span
          className={`text-[18px]`}
          style={{ color: `${isArray(iconBg) ? iconBg[0] : iconBg}` }}>
          {experience.title}-{experience['company_name']} ({experience['date']})
        </span>
        <div className="flex flex-col gap-[16px]">
          {experience.points.map((x: any) => (
            <span
              className="text-[16px] text-[#ffffff]"
              key={x}>
              <span className="inline-block mr-[10px] w-[12px] h-[12px] rouned-full bg-white"></span>
              {x}.
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

import Image from 'next/image';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
interface ExperienceCardProps {
  experience: any;
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff', left: '-5px' }}
      contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="w-full h-full flex justify-center items-center rounded-full">
          <Image
            src={`https://next-js-bucket.s3.ap-southeast-1.amazonaws.com/47969117.png`}
            alt={experience.title}
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      }>
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, index: number) => (
            <li
              key={index}
              className="text-white-100 text-[14px] font-normal">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;

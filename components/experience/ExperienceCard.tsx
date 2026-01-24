import React from 'react';
import { isArray } from 'lodash';
import ShinyText from '../shinny-text';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  experience: any;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const { isStart, isMiddle, isEnd, iconBg } = experience;
  const lineGradient = isArray(iconBg) ? `${iconBg[0]} 30%, ${iconBg[1]}` : `${iconBg} 30%`;

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div 
      className="flex gap-6 md:gap-12 w-full relative mb-8 md:mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
    >
      <div
        className="flex flex-col items-center flex-shrink-0 w-8 md:w-12">
        <div
          className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#1d1836] border-2 border-transparent z-10 text-white overflow-hidden shadow-[0_0_10px_rgba(145,94,255,0.3)]"
          style={{ color: isArray(iconBg) ? iconBg[0] : iconBg }}>
          {experience.icon.includes('fa-') ? (
            <i className={`${experience.icon} `}></i>
          ) : (
            <Briefcase className="w-4 h-4" />
          )}
        </div>
        <div
          className={`flex-grow w-0.5 md:w-[3px] bg-[#232631] mt-2 md:mt-4 rounded-full animate-shine-vertical`}
          style={{
            background: isStart
              ? `linear-gradient(0deg, transparent, ${lineGradient})`
              : isEnd
                ? `linear-gradient(0deg, ${lineGradient}, transparent)`
                : isMiddle
                  ? `linear-gradient(0deg, ${lineGradient}, transparent)`
                  : `linear-gradient(0deg, ${lineGradient}, ${lineGradient})`,
            backgroundSize: '100% 200%',
            animationDuration: '5s',
          }}></div>
      </div>
      
      <div className="flex-grow w-full min-w-0">
        <Card className="bg-[#1d1836]/50 border-purple-500/20 backdrop-blur-sm hover:bg-[#1d1836]/80 transition-colors">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex flex-col">
                <ShinyText
                  text={experience.title}
                  disabled={false}
                  speed={3}
                  className="text-xl md:text-2xl font-bold"
                  baseColor={isArray(iconBg) ? iconBg[0] : iconBg}
                  secondColor={isArray(iconBg) ? iconBg[1] : iconBg}
                  lastColor={isArray(iconBg) ? iconBg[2] : iconBg}
                />
                <span className="text-secondary text-[16px] font-semibold" style={{ color: '#aaa6c3' }}>
                  {experience.company_name}
                </span>
              </div>
              <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {experience.date}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="mt-4 list-none flex flex-col gap-4">
              {experience.points.map((point: string, id: number) => (
                <li
                  key={`experience-point-${id}`}
                  className="text-gray-300 text-sm md:text-base pl-1 tracking-wide flex items-start gap-4 leading-relaxed"
                >
                  <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-purple-500 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default React.memo(ExperienceCard);

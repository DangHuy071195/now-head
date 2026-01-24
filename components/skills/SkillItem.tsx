import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  progress: number;
  type: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, progress, type, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl md:text-xl text-white font-medium">{name}</h4>
      </div>
      <div className="h-3 w-full bg-[#1d1836]/80 rounded-full overflow-hidden relative backdrop-blur-sm">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #915eff 0%, #7C72FF 50%, #915eff 100%)'
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
            delay: index * 0.15
          }}
        >
          {/* Animated gradient shine */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
            }}
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
              delay: index * 0.3
            }}
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(SkillItem);

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ServiceCardInterfaceProps {
  title: string;
  description: string;
  index: number;
  icon: any;
  id: string | number;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardInterfaceProps> = ({ index, title, icon, description, id, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="w-full h-full"
    >
      <Card className="h-full bg-[#1d1836] border-purple-500/20 text-white min-h-[280px] flex flex-col items-center justify-center p-6 text-center hover:shadow-[0_0_20px_rgba(145,94,255,0.3)] transition-shadow duration-300">
        <CardHeader className="p-0 mb-6 w-full flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
            {icon && <i className={`${icon} text-[28px] text-white`}></i>}
            {!icon && image && (
              <Image
                src={image}
                width={32}
                height={32}
                alt={title}
                className="invert"
              />
            )}
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold tracking-wider">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default React.memo(ServiceCard);

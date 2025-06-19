import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  handle: string;
  status?: 'Online' | 'Away' | 'Offline';
  bio?: string;
  stats?: { followers: number; following: number; likes: number };
  socialLinks?: { platform: string; url: string; icon: string }[];
  onContactClick?: () => void;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  handle,
  status = 'Online',
  bio,
  stats,
  socialLinks,
  onContactClick,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position to rotation angles
  const rotateY = useTransform(x, [-300, 300], [25, -25]);
  const rotateX = useTransform(y, [-300, 300], [-25, 25]);

  // Shine effect position
  const shineX = useTransform(x, [-300, 300], ['30%', '70%']);
  const shineY = useTransform(y, [-300, 300], ['30%', '70%']);

  // Handler for mouse move
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    x.set(mouseX);
    y.set(mouseY);
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  // Status colors
  const statusColors = {
    Online: 'bg-green-500',
    Away: 'bg-yellow-500',
    Offline: 'bg-gray-400',
  };

  // Animation for entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.opacity = '1';
        cardRef.current.style.transform = 'translateY(0)';
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-full max-w-sm transition-all duration-700 opacity-0 transform translate-y-8 ${className}`}
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}>
      <motion.div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          rotateY,
          rotateX,
          transformStyle: 'preserve-3d',
          boxShadow: isHovering
            ? '0 50px 80px -20px rgba(0,0,0,0.27), 0 30px 50px -30px rgba(0,0,0,0.3)'
            : '0 10px 30px -15px rgba(0,0,0,0.3)',
          transition: 'box-shadow 0.5s ease',
        }}>
        {/* Card background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 z-0" />

        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 z-10 opacity-0"
          style={{
            background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)`,
            opacity: isHovering ? 0.15 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />

        {/* Card content */}
        <div className="relative z-20 bg-white/10 backdrop-blur-sm p-6 h-full">
          <div className="flex flex-col items-center">
            {/* Avatar with glow */}
            <div className="relative mb-4">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1.15, opacity: 0.5 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              />
              <motion.div
                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}>
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Status indicator */}
              <motion.div
                className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white ${statusColors[status]}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
              />
            </div>

            {/* User info with staggered animation */}
            <motion.div
              className="text-center space-y-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-white">{name}</h2>
              <p className="text-indigo-200 font-medium">{title}</p>
              <p className="text-white/70">@{handle}</p>

              {bio && <p className="text-white/80 text-sm mt-3 max-w-xs">{bio}</p>}
            </motion.div>

            {/* Stats section */}
            {stats && (
              <motion.div
                className="flex justify-between w-full mt-6 border-t border-white/10 pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}>
                {Object.entries(stats).map(([key, value], index) => (
                  <div
                    key={key}
                    className="text-center">
                    <p className="text-white font-bold text-lg">{value}</p>
                    <p className="text-white/60 text-xs capitalize">{key}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Contact button with hover effect */}
            <motion.button
              onClick={onContactClick}
              className="mt-6 bg-white text-indigo-600 px-8 py-2.5 rounded-full font-medium shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.5,
                type: 'spring',
                stiffness: 300,
              }}>
              Connect
            </motion.button>

            {/* Social links */}
            {socialLinks && (
              <motion.div
                className="flex space-x-3 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    aria-label={`${name}'s ${link.platform}`}>
                    <span className="text-white text-sm">{link.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Reflection effect */}
      <motion.div
        className="absolute w-full h-1/3 bottom-0 left-0 bg-gradient-to-t from-white/5 to-transparent rounded-b-2xl"
        style={{
          opacity: isHovering ? 0.07 : 0,
          rotateX: -180,
          rotateY: 0,
          translateY: '100%',
          transformOrigin: 'top',
          transition: 'opacity 0.5s ease',
        }}
      />
    </div>
  );
};

export default ProfileCard;

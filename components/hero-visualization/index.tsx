import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Globe, Database, Layout } from 'lucide-react';

const CodeWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-lg mx-auto bg-slate-900 rounded-lg shadow-2xl border border-slate-800 overflow-hidden"
    >
      <div className="bg-slate-800/50 p-3 flex items-center gap-2 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-xs text-slate-400 font-mono flex items-center gap-1">
          <Terminal className="w-3 h-3" />
          portfolio.tsx
        </div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
        <div className="flex gap-4">
          <div className="text-slate-600 select-none text-right">
            1
            <br />2<br />3<br />4<br />5<br />6<br />7<br />8
          </div>
          <div className="flex-1">
            <span className="text-purple-400">const</span> <span className="text-yellow-300">Developer</span>{' '}
            <span className="text-purple-400">=</span> <span className="text-blue-400">{'{'}</span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-300">name</span>:{' '}
            <span className="text-green-300">"Huy Nguyen"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-purple-300">role</span>:{' '}
            <span className="text-green-300">"Frontend Expert"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-purple-300">skills</span>: <span className="text-blue-400">{'['}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"React"</span>,{' '}
            <span className="text-green-300">"Next.js"</span>,{' '}
            <span className="text-green-300">"TypeScript"</span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">{']'}</span>,
            <br />
            &nbsp;&nbsp;<span className="text-purple-300">status</span>:{' '}
            <span className="text-green-300">"Open to work"</span>
            <br />
            <span className="text-blue-400">{'}'}</span>;
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingIcon = ({ children, delay, x, y }: { children: React.ReactNode; delay: number; x: number; y: number }) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: 'easeInOut',
    }}
    className="absolute bg-slate-800/80 p-3 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-xl"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    {children}
  </motion.div>
);

const HeroVisualization = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto">
        <CodeWindow />
        
        {/* Floating Tech Icons */}
        <FloatingIcon delay={0} x={-5} y={10}>
          <Code className="w-8 h-8 text-blue-400" />
        </FloatingIcon>
        
        <FloatingIcon delay={1} x={90} y={20}>
          <Globe className="w-8 h-8 text-green-400" />
        </FloatingIcon>
        
        <FloatingIcon delay={2} x={85} y={70}>
          <Database className="w-8 h-8 text-yellow-400" />
        </FloatingIcon>
        
        <FloatingIcon delay={1.5} x={-2} y={60}>
          <Layout className="w-8 h-8 text-purple-400" />
        </FloatingIcon>

        <FloatingIcon delay={0.5} x={45} y={-10}>
          <Cpu className="w-8 h-8 text-red-400" />
        </FloatingIcon>
      </div>
    </div>
  );
};

export default HeroVisualization;

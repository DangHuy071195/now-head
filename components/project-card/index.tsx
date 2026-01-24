import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, TrendingUp } from 'lucide-react';

interface ProjectCardPropsI {
  color?: string;
  progress?: string;
  title: string;
  description?: string;
  status?: 'in-progress' | 'completed' | 'planning' | 'live';
  link?: string;
  tags?: string[];
  date?: string;
}

const statusColors = {
  'in-progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'completed': 'bg-green-500/20 text-green-400 border-green-500/30',
  'planning': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'live': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const ProjectCard: React.FC<ProjectCardPropsI> = ({ 
  title, 
  description, 
  status = 'planning',
  link,
  tags = [],
  date,
  progress
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardHeader className="relative">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge className={statusColors[status]} variant="outline">
              {status.replace('-', ' ')}
            </Badge>
            {date && (
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3 h-3" />
                {date}
              </div>
            )}
          </div>
          <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-slate-300 mt-2">
              {description}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="relative space-y-4">
          {progress && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Progress
                </span>
                <span className="text-purple-400 font-semibold">{progress}</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: progress }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                />
              </div>
            </div>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700/50">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        {link && (
          <CardFooter className="relative">
            <Button 
              asChild
              variant="outline" 
              className="w-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/50 hover:from-purple-500/20 hover:to-blue-500/20 text-white group/btn"
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                View Project
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

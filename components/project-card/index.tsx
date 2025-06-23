import Image from 'next/image';
import React from 'react';
import classes from './index.module.css';
import { cn } from '@/utils/cn';
interface ProjectCardPropsI {
  color: string;
  progress: string;
  title: string;
  count: number;
}
const ProjectCard: React.FC<ProjectCardPropsI> = ({ color, progress, title, count }) => {
  return (
    <div className={cn(classes.card, classes[color])}>
      <div className={classes.cardHeader}>
        <div className="date">Feb 2, 2021</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6">
          <path
            fillRule="evenodd"
            d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={classes['card-body']}>
        <h3>{title}</h3>
        <p>Development Progress</p>
        <div className={classes['progress']}>
          <span>Progress</span>
          <div className={classes['progress-bar']}></div>
          <span>{progress}</span>
        </div>
      </div>
      <div className={classes['card-footer']}>
        <ul>
          <li>
            <Image
              width={19}
              height={19}
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </li>
          <li>
            <Image
              width={19}
              height={19}
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </li>
          <li>
            <a
              href="#"
              className={classes['add-btn']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6">
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>

        <a
          href="#"
          className={classes['btn-countdown']}>
          {count} days left
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

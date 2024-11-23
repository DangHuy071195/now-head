import React from 'react';
import classes from './index.module.css';
import Image from 'next/image';

interface CourseItemPropsI {
  id?: string | number;
  title?: string;
  description?: string;
  image?: string;
}
const CourseItem: React.FC<CourseItemPropsI> = () => {
  return (
    <div className={classes.course}>
      <h1 className={classes['course-title']}>course.title</h1>
      <p className={classes['course-description']}>course.description</p>
      <Image
        src={'/image.png'}
        alt="course.title"
        width={200}
        height={200}
      />
    </div>
  );
};

export default CourseItem;

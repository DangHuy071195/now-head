import React from 'react';
import classes from './index.module.css';
import CourseItem from '@/components/course-item';
import { courses } from '@/const';

const Courses = () => {
  return (
    <div className={classes.courses}>
      {courses.map((course) => (
        <CourseItem
          key={course.id}
          {...course}
        />
      ))}
    </div>
  );
};

export default Courses;

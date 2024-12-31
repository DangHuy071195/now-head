import React from 'react';
import classes from './index.module.css';
import CourseItem from '@/components/course-item';
import { courses } from '@/const';

const Courses = () => {
  return (
    <div className={`${classes.courses} bg-gray-800 lg:bg-red-400 xl:bg-green-400`}>
      {/* {courses.map((course) => (
        <CourseItem
          key={course.id}
          {...course}
        />
      ))} */}
      <h3>Title of list</h3>
      <ul className="list-disc ml-6 ">
        <li className="mb-6 text-xl">Something</li>
        <li className="mb-6 text-xl">Something</li>
        <li className="mb-6 text-xl">Something</li>
        <li className="mb-6 text-xl">Something</li>
        <li className="mb-6 text-xl">Something</li>
      </ul>
      <a className="bg-gray-300 max-w-40 px-4 py-2 rouned shadow-sm hover:bg-gray-400 hover:shadow-none transition focus:ring focus:ring-yellow-300">
        Something
      </a>
    </div>
  );
};

export default Courses;

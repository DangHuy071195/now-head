import { useRouter } from 'next/router';
import React from 'react';
import classes from './index.module.css';
import { title } from 'process';
import Image from 'next/image';
import CourseItem from '@/components/course-item';
import { courses } from '@/const';

const Course = () => {
  const router = useRouter();
  const { id } = router.query;
  const course = courses.find((course) => course.id === +id!);
  return <CourseItem {...course} />;
};

export default Course;

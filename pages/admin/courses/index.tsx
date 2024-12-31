import MainLayout from '@/components/layout';
import { render } from '@react-three/fiber';
import { Avatar, Button, Table } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { div } from 'three/webgpu';

const dataSource = [
  {
    key: '1',
    name: 'Introduction to Programming',
    instructor: 'John Doe',
    duration: '10 weeks',
  },
  {
    key: '2',
    name: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    duration: '8 weeks',
  },
  {
    key: '3',
    name: 'Data Structures and Algorithms',
    instructor: 'Alice Johnson',
    duration: '12 weeks',
  },
  {
    key: '4',
    name: 'Web Development Bootcamp',
    instructor: 'Bob Brown',
    duration: '15 weeks',
  },
];

const columns = [
  {
    title: 'Course Name',
    key: 'name',
    render: (record: any) => {
      return (
        <div className="flex gap-[4px]">
          <Link href={`/admin/courses/${record.key}`}>
            <Avatar
              shape="square"
              src={record.imgUrl}
              size={48}
            />
          </Link>
          <div className="flex flex-col">
            <span>{record.name}</span>
            <p>{record.instructor}</p>
          </div>
        </div>
      );
    },
  },
  {
    title: 'Instructor',
    dataIndex: 'instructor',
    key: 'instructor',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
];

const Courses = () => {
  const router = useRouter();

  const addNewCourseHandler = () => {
    router.push('/admin/courses/new');
  };
  return (
    <div>
      <div className="bg-white rounded-sm p-[12px] flex justify-between">
        <h1 className="font-medium">All Courses</h1>
        <Button
          type="primary"
          onClick={addNewCourseHandler}>
          Add New Course
        </Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default Courses;

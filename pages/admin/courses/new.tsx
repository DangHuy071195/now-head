import ModalLession from '@/components/lession/ModalLession';
import { Avatar, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

const AddNewCourse = () => {
  const [openLession, setOpenLession] = useState(false);

  const addLessionHandler = () => {
    setOpenLession(true);
  };
  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <div className="rounded-md bg-white p-[12px]">
          <h1>New Course</h1>
        </div>
        <div className="rounded-md bg-white p-[12px]">
          <div className="max-w-[500px]">
            <label>Descriptions:</label>
            <TextArea placeholder="give me some descriptions..." />
          </div>
        </div>
        <div className="rounded-md bg-white p-[12px] flex gap-[12px] justify-between">
          <div className="flex gap-[12px] bg-orange-200 p-[12px] flex-1">
            <Avatar
              shape="square"
              size={48}
              src=""
            />
            <div>
              <span>title</span>
              <p>desc....</p>
            </div>
          </div>
          <div>
            <Button
              size="small"
              icon={<i className="fa-solid fa-plus"></i>}
              onClick={addLessionHandler}>
              Add Lession
            </Button>
          </div>
        </div>
      </div>
      <ModalLession
        open={openLession}
        handleOpen={(val: boolean) => setOpenLession(val)}
      />
    </>
  );
};

export default AddNewCourse;

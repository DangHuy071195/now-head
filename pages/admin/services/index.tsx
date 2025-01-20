import React, { useState } from 'react';
import { Form, Input, Button, Modal, Upload, Table } from 'antd';
import Base from 'antd/es/typography/Base';
import BaseUpload from './Upload';
import MainLayout from '@/components/layout';
import UploadFileCustomize from './Upload';
import axios from 'axios';

const Services = () => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState<any[]>([]);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = async (values: any) => {
    console.log('Success:', values);

    const formData = new FormData();
    formData.append('serviceName', values.serviceName);
    formData.append('description', values.description);
    console.log(`values.imageUrl`, values.imageUrl);
    if (values.imageUrl && values.imageUrl.length > 0) {
      values.imageUrl.forEach((file: any) => {
        formData.append('images[]', file.originFileObj); // Append each image as a separate field
      });
    }

    // Handling multiple video files
    if (values.videoUrl && values.videoUrl.length > 0) {
      values.videoUrl.forEach((file: any) => {
        formData.append('videos[]', file.originFileObj); // Append each video as a separate field
      });
    }

    formData.append('projectUrl', values.projectUrl);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex flex-col bg-white p-[1.6rem] rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[1.4rem] uppercase text-[#232323] font-medium">Services</h1>
        <Button
          type="primary"
          onClick={() => setOpen(true)}>
          Add Service
        </Button>
      </div>
      {/* <Modal
        open={open}
        title="Add Service"
        closable
        closeIcon={<i className="fas fa-times" />}
        onOk={() => {
          onFinish(form.getFieldsValue());
        }}
        onCancel={() => setOpen(false)}> */}
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical">
        <Form.Item
          label="Service Name"
          name="serviceName"
          rules={[{ required: true, message: 'Please input the service name!' }]}>
          <Input placeholder="services name..." />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the description!' }]}>
          <Input.TextArea
            placeholder="descriptions"
            rows={5}
          />
        </Form.Item>
        <Form.Item
          label="Image URL"
          name="imageUrl"
          rules={[{ required: true, message: 'Please input the image URL!' }]}
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}>
          <UploadFileCustomize
            fileList={fileList}
            handleFileList={(val) => setFileList(val)}
          />
        </Form.Item>

        <Form.Item
          label="Video URL"
          name="videoUrl"
          valuePropName="fileList"
          rules={[{ required: true, message: 'Please input the video URL!' }]}>
          <UploadFileCustomize
            fileList={fileList}
            handleFileList={(val) => setFileList(val)}
          />
        </Form.Item>

        <Form.Item
          label="Project URL"
          name="projectUrl"
          rules={[{ required: true, message: 'Please input the project URL!' }]}>
          <Input placeholder="give me url for project in reals" />
        </Form.Item>
      </Form>
      {/* </Modal> */}

      <Table
        dataSource={services}
        columns={[
          {
            title: 'Service Name',
            dataIndex: 'serviceName',
            key: 'serviceName',
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
          },
          {
            title: 'Video',
            dataIndex: 'videoUrl',
            key: 'videoUrl',
          },
          {
            title: 'Project',
            dataIndex: 'projectUrl',
            key: 'projectUrl',
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <div className="flex justify-center items-center">
                <Button
                  type="primary"
                  className="mr-2">
                  Edit
                </Button>
                <Button>Delete</Button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Services;

import React, { useState } from 'react';
import { Form, Input, Button, Modal, Upload, Table } from 'antd';
import Base from 'antd/es/typography/Base';
import BaseUpload from './Upload';

const Services = () => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = async (values: any) => {
    console.log('Success:', values);

    const formData = new FormData();
    formData.append('serviceName', values.serviceName);
    formData.append('description', values.description);
    console.log(`values.imageUrl`, values.imageUrl);
    if (values.imageUrl && values.imageUrl[0]) {
      formData.append('image', values.imageUrl[0].originFileObj);
    }
    if (values.videoUrl && values.videoUrl[0]) {
      formData.append('video', values.videoUrl[0].originFileObj);
    }
    formData.append('projectUrl', values.projectUrl);

    // try {
    //   const response = await axios.post('/api/services', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   setServices([...services, response.data]);
    //   setOpen(false);
    // } catch (error) {
    //   console.error('There was an error uploading the data!', error);
    // }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex flex-col ">
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
          <BaseUpload
            fileList={fileList}
            handleFileList={(val: any) => setFileList(val)}
          />
        </Form.Item>

        <Form.Item
          label="Video URL"
          name="videoUrl"
          rules={[{ required: true, message: 'Please input the video URL!' }]}>
          <Upload>
            <Button icon={<i className="fas fa-upload" />}>Upload</Button>
          </Upload>
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

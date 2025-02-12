import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Modal, Upload, Table, Avatar, notification, Popconfirm } from 'antd';
import Base from 'antd/es/typography/Base';
import BaseUpload from './Upload';
import MainLayout from '@/components/layout';
import UploadFileCustomize from './Upload';
import axios from 'axios';
import { useTypedSelector } from '@/hooks/useSelector';
import { get, isEmpty, set } from 'lodash';
import { not } from 'three/webgpu';

const Services = () => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState<any>([]);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [service, setService] = useState<any>();

  const user = useTypedSelector((state) => state.user);
  console.log(`user`, user);
  const firebaseToken = user?.user?.firebaseToken;
  const token = user?.user?.token;
  console.log(`firebaseToken`, firebaseToken);
  console.log(`token`, token);

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const { serviceName, description, projectUrl } = values;
    if (isEmpty(images) || isEmpty(videos)) {
      notification.error({
        message: 'Error',
        description: 'Please input the image and video URL!',
      });
      return;
    }
    try {
      const res = await axios.post('/api/services', {
        serviceName,
        description,
        images,
        videos,
        projectUrl,
        token: `${firebaseToken},${token}`,
      });
      console.log(`res`, res);
      setOpen(false);
      getServices();
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const getServices = async () => {
    try {
      const res = await axios.get('/api/services', {
        headers: {
          Authorization: `Bearer ${firebaseToken},${token}`,
        },
      });
      console.log(`res services`, res);
      //@ts-ignore
      setServices([...res.data]);
    } catch (error) {
      console.log(`error`, error);
    }
  };
  useEffect(() => {
    getServices();
  }, [firebaseToken, token]);

  const onFinishUpdate = async (values: any) => {
    console.log('Success:', values);
    const { serviceName, description, projectUrl, icon } = values;
    const valuesUpdated = {
      name: serviceName,
      description,
      images,
      videos,
      projectUrl,
      icon,
      token: `${firebaseToken},${token}`,
    };
    const cleanedValues = Object.fromEntries(Object.entries(valuesUpdated).filter(([_, v]) => !isEmpty(v)));
    console.log(`cleanedValues`, cleanedValues);
    try {
      const res = await axios.patch(`/api/services/${service._id}`, {
        ...cleanedValues,
        token: `${firebaseToken},${token}`,
      });
      console.log(`res`, res);
      setOpenEdit(false);
      getServices();
    } catch (error) {
      console.log(`error`, error);
    }
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
      <Modal
        open={open}
        title="Add Service"
        closable
        closeIcon={<i className="fas fa-times" />}
        onOk={() => {
          onFinish(form.getFieldsValue());
        }}
        onCancel={() => setOpen(false)}>
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
            name={'icon'}
            label="Icon"
            rules={[{ required: true, message: 'Please input the icon!' }]}>
            <Input placeholder="Enter your icon..." />
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
              handleUrl={(url) => {
                setImages((prev) => [...prev, ...url]);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Video URL"
            name="videoUrl"
            valuePropName="fileList"
            rules={[{ required: true, message: 'Please input the video URL!' }]}>
            <UploadFileCustomize
              handleUrl={(url) => {
                setVideos((prev) => [...prev, ...url]);
              }}
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
      </Modal>

      <Table
        rowKey={(record: any) => record._id}
        dataSource={services}
        columns={[
          {
            title: 'Service Name',
            dataIndex: 'name',
            key: 'serviceName',
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Icon',
            dataIndex: 'icon',
            key: 'icon',
            render: (icon: string) => {
              return <i className={icon} />;
            },
          },
          {
            title: 'Image',
            key: 'imageUrl',
            render: (record: any) => {
              return record.images.map((image: string) => {
                return (
                  <Avatar
                    src={image}
                    key={image}
                    shape="square"
                    size={64}
                  />
                );
              });
            },
          },
          {
            title: 'Video',
            key: 'videoUrl',
            render: (record: any) => {
              return record.videos.map((video: string) => {
                return (
                  <Avatar
                    src={video}
                    key={video}
                    shape="square"
                    size={64}
                  />
                );
              });
            },
          },
          {
            title: 'Project',
            dataIndex: 'projectUrl',
            key: 'projectUrl',
          },
          {
            title: 'Action',
            key: 'action',
            render: (record) => (
              <div className="flex justify-center items-center">
                <Button
                  type="primary"
                  className="mr-2"
                  onClick={() => {
                    setService(record);
                    setOpenEdit(true);
                  }}>
                  Edit
                </Button>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={() => {
                    console.log('delete', record._id);
                    axios.delete(`/api/services/${record._id}`, {
                      headers: {
                        Authorization: `Bearer ${firebaseToken},${token}`,
                      },
                    });
                    getServices();
                  }}
                  onCancel={() => {
                    console.log(`nothing in console...`);
                  }}
                  okText="Yes"
                  cancelText="No">
                  <Button danger>Delete</Button>
                </Popconfirm>
              </div>
            ),
          },
        ]}
      />
      <Modal
        onClose={() => setOpenEdit(false)}
        open={openEdit}
        title="Edit Service"
        closable
        closeIcon={<i className="fas fa-times" />}
        onOk={() => {
          onFinishUpdate(form.getFieldsValue());
        }}
        onCancel={() => setOpen(false)}>
        <Form
          form={form}
          onFinish={onFinishUpdate}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          initialValues={{ ...service, serviceName: service?.name }}>
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
            name={'icon'}
            label="Icon"
            rules={[{ required: true, message: 'Please input the icon!' }]}>
            <Input placeholder="Please input your icon..." />
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
              handleUrl={(url) => {
                setImages((prev) => [...prev, ...url]);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Video URL"
            name="videoUrl"
            valuePropName="fileList"
            rules={[{ required: true, message: 'Please input the video URL!' }]}>
            <UploadFileCustomize
              handleUrl={(url) => {
                setVideos((prev) => [...prev, ...url]);
              }}
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
      </Modal>
    </div>
  );
};

export default Services;

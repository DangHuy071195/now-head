import { Button, Form, Input, Modal, Upload } from 'antd';
import React from 'react';
interface ModalLessionPropsI {
  open: boolean;
  handleOpen: (val: boolean) => void;
}
const ModalLession: React.FC<ModalLessionPropsI> = ({ open }) => {
  const okHandler = () => {};
  return (
    <Modal
      open={open}
      onOk={okHandler}
      title="Add New Lession"
      centered>
      <Form>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input the title!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the description!' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Video"
          name="video"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
          rules={[{ required: true, message: 'Please upload the video!' }]}>
          <Upload
            name="video"
            action="/upload.do"
            listType="text">
            <Button icon={<i className="fa-solid fa-upload"></i>}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Image Preview"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
          rules={[{ required: true, message: 'Please upload the image preview!' }]}>
          <Upload
            name="image"
            action="/upload.do"
            listType="picture">
            <Button icon={<i className="fa-solid fa-upload"></i>}>Click to upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalLession;

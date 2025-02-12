import React, { useState } from 'react';
import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
import { Progress, UploadProps } from 'antd';
import { message, Upload } from 'antd';
// import { useTypedSelector } from '../../hooks/useTypedSelector';
// import Resizer from 'react-image-file-resizer';
// import { uploadImages } from '../../services/cloudinary-services';
import axios from 'axios';
import { useTypedSelector } from '@/hooks/useSelector';
const { Dragger } = Upload;

interface UploadFileCustomizeProps {
  fileList: any;
  handleFileList: (files: any) => void;
  handleUrl: (url: string) => void;
}

const UploadFileCustomize: React.FC<UploadFileCustomizeProps> = ({ handleFileList, fileList, handleUrl }) => {
  // const { userInfo } = useTypedSelector((state) => state.userLogin);
  const [progress, setProgress] = useState(0);
  const { user } = useTypedSelector((state) => state.user);

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];
    // Limit the number of files to 10
    fileList = fileList.slice(-10);
    handleFileList(fileList);
  };

  const props: UploadProps = {
    fileList,
    multiple: true,
    listType: 'picture-card',
    customRequest: (options) => {
      // Preventing the default behavior
      //@ts-ignore
      options.onStart(); // Optional: Trigger `onStart` event
      uploadImage(options);
    },
    onChange: handleChange,
  };

  const beforeUpload = (file: any) => {
    return false; // Prevent automatic upload, we handle this manually
  };

  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    let files: any = [];
    console.log(`file`, file);
    if (Array.isArray(file)) {
      files = file;
    } else {
      files.push(file); // Gather single file if only one is selected
    }
    console.log(`files`, files);
    const formData = new FormData();
    files.forEach((file: any) => {
      formData.append('images', file);
    });
    // formData.append('token', `${user.firebaseToken}, ${user.token}`);

    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        // onUploadProgress: (event: any) => {
        //   const percent = Math.floor((event.loaded / event.total) * 100);
        //   setProgress(percent);
        //   if (percent === 100) {
        //     setTimeout(() => setProgress(0), 1000);
        //   }
        //   onProgress({ percent });
        // },
      });
      const { urls } = res.data;
      console.log(`urls`, urls);
      handleUrl(urls);
      // handleFileList((prevList: any) => [...prevList, res.data]); // Assuming response contains file info
      onSuccess(null, file);
    } catch (err) {
      console.error('Upload failed:', err);
      onError(err);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        {...props}
        showUploadList={{ showPreviewIcon: true }}
        // headers={{ Authorization: `Bearer ${userInfo?.token}` }}
        // beforeUpload={beforeUpload}
        customRequest={uploadImage}>
        {fileList?.length >= 8 ? null : uploadButton}
      </Upload>
      {/* {progress > 0 ? <Progress percent={progress} /> : null} */}
    </>
  );
};

export default UploadFileCustomize;

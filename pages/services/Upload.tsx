import React, { useState } from 'react';
import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
import { Progress, UploadProps } from 'antd';
import { message, Upload } from 'antd';
// import { useTypedSelector } from '../../hooks/useTypedSelector';
// import Resizer from 'react-image-file-resizer';
// import { uploadImages } from '../../services/cloudinary-services';
import axios from 'axios';
const { Dragger } = Upload;

interface UploadFileCustomizeProps {
  fileList: any;
  handleFileList: (files: any) => void;
}

const UploadFileCustomize: React.FC<UploadFileCustomizeProps> = ({ handleFileList, fileList }) => {
  // const { userInfo } = useTypedSelector((state) => state.userLogin);
  const [progress, setProgress] = useState(0);

  const beforeUpload = (file: any) => {
    // // setFileList([...fileList, file])
    // let images: any = []
    // Resizer.imageFileResizer(file, 720, 720, 'png', 100, 0, async (uri) => {
    // 	try {
    // 		// const res = await uploadImages(uri)
    // 		images.push(res.data)
    // 		setFileList([...images])
    // 	} catch (error) {
    // 	}
    // })
  };

  const props: UploadProps = {
    name: 'image',
    multiple: true,
    listType: 'picture-card',
  };

  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    let images: any = [];

    // Resizer.imageFileResizer(file, 720, 720, 'png', 100, 0, async (uri) => {
    //   try {
    //     const res = await uploadImages(uri, {
    //       onUploadProgress: (event: any) => {
    //         const percent = Math.floor((event.loaded / event.total) * 100);
    //         setProgress(percent);
    //         if (percent === 100) {
    //           setTimeout(() => setProgress(0), 1000);
    //         }
    //         onProgress({ percent: (event.loaded / event.total) * 100 });
    //       },
    //     });
    //     images.push(res.data);
    //     handleFileList([...images]);
    //     onSuccess('Ok');
    //   } catch (err) {
    //     const error = new Error('Some error');
    //     onError({ err });
    //   }
    // });

    try {
      const res = await axios.post('http://localhost:3000/api/upload', { images: file });
    } catch (error) {
      console.log(`error`, error);
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

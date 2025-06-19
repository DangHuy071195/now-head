import multer from 'multer';
import AWS from 'aws-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,  // Disable the default body parser for this API route
  },
};
// Initialize AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,

});

// Set up multer storage to use memory storage for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 }, }).array('images', 10); // Max 10 images
export { upload, s3 }
export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    return new Promise((resolve, reject) => {
      // Handle file upload using multer

      upload(req, res, async (err) => {
        if (err) {
          console.error('Multer error:', err);
          return res.status(500).json({ message: 'File upload failed', error: err });
        }

        if (!req.file || req.file.length === 0) {
          return res.status(400).json({ message: 'No files uploaded' });
        }

        try {
          const file = req.file
          const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${Date.now()}_${file.originalname}`, // Unique name for each file
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: 'public-read',
          };
          //@ts-ignore
          const s3Response = await s3.upload(params).promise();
          return s3Response.Location;
        } catch (error) {
          console.error('S3 upload error:', error);
          res.status(500).json({ message: 'Failed to upload file to S3', error });
          reject();
        }
      });
    });

  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
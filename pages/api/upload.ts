import { NextApiRequest, NextApiResponse } from "next";
import http from "@/libs/http";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Hello World' });
    const images = req.body.images;


    const resUpload = await http.post(`/upload`, images, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.json(resUpload.data);
  } else {
    res.status(400).json({ message: 'Method not allowed' });
  }
}
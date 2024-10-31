import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(`req.body`, req.body);
    const { token } = req.body;
    const resAuth = await axios.post('http://localhost:5000/auth/phone-login', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(`res`, resAuth.data)
    return res.status(200).json({ message: 'Phone number verified successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
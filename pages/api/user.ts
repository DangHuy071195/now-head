import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(`req.body`, req.body)
    const { name, email, password } = req.body;
    try {
      const resUser = await axios.post('http://localhost:5000/sign-up', { name, email, password });
      console.log(`resUser.data`, resUser.data)
      return res.status(200).json(resUser.data);
    } catch (error) {
      console.error('Error in API call:', error);
      return res.status(500).json({ error: 'Failed to fetch user data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(`run with email...`)
    const token = req.body.token
    const resEmail = await axios.post(`http://127.0.0.1:5000/auth/email`, { token })
    res.status(200).json(resEmail.data)
  } else {
    console.log(`another method is run...`)
  }

}
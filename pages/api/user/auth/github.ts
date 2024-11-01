import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const resGoogleAuth = await axios.post(`http:127.0.0.1:5000/auth/github`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${req.body.token}`
      }
    })
    console.log(`resGoogleAuth`, resGoogleAuth.data)
    res.status(200).json(resGoogleAuth.data)
  } else {

  }

}
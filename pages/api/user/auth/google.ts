import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const resGoogleAuth = await axios.get(`http:127.0.0.1:5000/auth/google`)
    console.log(`resGoogleAuth`, resGoogleAuth.data)
    res.status(200).json(resGoogleAuth.data)
  } else {

  }

}
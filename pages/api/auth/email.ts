import http from "@/libs/http";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { token, provider } = req.body
      console.log(`token`, token)
      const resAuth = await http.post(`/auth/${provider}`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token},`
        }
      })
      console.log(`resAuth`, resAuth.data)
      res.status(200).json(resAuth.data)
    } catch (error: any) {
      console.log(`error`, error)
      res.status(400).json({ error: error.message })
    }
  } else {
    console.log(`another method is run...`)
  }

}
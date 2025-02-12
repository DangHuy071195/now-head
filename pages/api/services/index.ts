import { NextApiRequest, NextApiResponse } from 'next';
import http from "@/libs/http";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = req.body;
    const { token } = body
    try {
      const resService = await http.post('/service', body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token},`
        }
      });
      res.status(200).json(resService.data);
    } catch (error) {
      console.log(`error`, error);
    }
  } else if (req.method === "GET") {
    const headers = req.headers;
    const bearerToken = headers.authorization ?? ''
    console.log(`bearerToken`, bearerToken);
    let url = '/services';
    if (req.query.id) {
      url = `/service/${req.query.id}`
    }
    try {
      const resService = await http.get(url, {
        headers: {
          'Authorization': bearerToken
        }
      });
      res.status(200).json(resService.data.services);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch services', error });
    }
  }
}
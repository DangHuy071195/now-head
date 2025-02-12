import { NextApiRequest, NextApiResponse } from "next";
import http from "@/libs/http";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "PATCH") {
    const body = req.body;
    const { token } = body
    let url = '/services';
    console.log(`req.query.serviceId`, req.query.serviceId);
    if (req.query.serviceId) {
      url = `/services/${req.query.serviceId}`
    }
    try {
      const resService = await http.patch(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token},`
        }
      });
      res.status(200).json(resService.data);
    } catch (error) {
    }
  } else if (req.method === 'DELETE') {
    const body = req.body;
    const { token } = body
    let url = '/services';
    console.log(`req.query.serviceId`, req.query.serviceId);
    const authorization = req.headers.authorization ?? '';

    if (req.query.serviceId) {
      url = `/services/${req.query.serviceId}`
    }
    try {
      const resService = await http.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authorization
        }
      });
      res.status(200).json(resService.data);
    } catch (error) {
    }
  }

}
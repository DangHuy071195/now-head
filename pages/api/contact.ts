//@ts-nocheck
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from "@/libs/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`req.method`, req.method)
  res.setHeader('Access-Control-Allow-Origin', '*'); // Use a specific domain in production
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db('mastery-js'); // Use 'master-js' as the database
      const collection = db.collection('messages');

      // Insert the message into the collection
      await collection.insertOne({ name, email, message, date: new Date() });

      res.status(200).json({ message: 'Message stored successfully!' });
    } catch (error) {
      console.error('Failed to store message:', error);
      res.status(500).json({ message: 'Failed to store message', error });
    }
  } else {

    res.status(405).json({ message: 'Method not allowed' });
  }
}

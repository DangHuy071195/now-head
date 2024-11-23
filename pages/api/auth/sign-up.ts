import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, token } = req.body
    const resEmail = await axios.post(`http://localhost:5000/auth/sign-up}`, { username },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
    console.log(`resEmail`, resEmail)
  } else {
    console.log(`another method is run...`)
  }
}
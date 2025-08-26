import { query } from '../../../lib/db.js'; // Adjust path if needed
import type { NextApiRequest, NextApiResponse } from 'next';
type Contact = {
    name:string;
    email:string;
    message:string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; result?: unknown; error?: string }>
) {
   
  if (req.method === 'POST') {
    const newRow: Contact = req.body;
    // Check if required fields are present
    if (
      !newRow ||
      newRow.name === undefined ||
      newRow.email === undefined ||
      newRow.message === undefined
    ) {
      return res.status(400).json({ message: 'Missing Vontact Values' });
    }

    try {
      const { name, email, message } = newRow;

    
      const result = await query(
        'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)',
        [name, email, message]
      );

      res.status(200).json({
        message: 'contact record added successfully',
        result,
      });
    } catch (error: unknown) {
        console.error(`Error creating contact:`, error);

        if (error instanceof Error) {
          res.status(500).json({
            message: `Error creating contact`,
            error: error.message,
          });
        } else {
          res.status(500).json({
            message: `Error creating contact`,
            error: 'Unknown error occurred',
          });
        }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

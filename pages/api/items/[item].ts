// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDataFromDatabaseCollection } from '../../../utils/getDataFromDatabaseCollection';

const dbUserName = process.env.DATABASE_USERNAME!;
const dbPassword = process.env.DATABASE_PASSWORD!;
const dbName = process.env.DATABASE_NAME!;
const itemsCollectionName = 'items';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const itemId = req.query.item as string;

    switch(req.method) {
        case "POST":
            console.log('POST');
            console.log(req.body)
            break;
        default:
        const items = await getDataFromDatabaseCollection(dbUserName, dbPassword, dbName, itemsCollectionName, itemId)
        res.status(200).json({ items  })
    }
}

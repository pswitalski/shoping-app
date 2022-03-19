// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDataFromDatabaseCollection } from '../../../utils/getDataFromDatabaseCollection';
import { saveNewItemToDatabase } from '../../../utils/saveNewItemToDatabase';

const dbUserName = process.env.DATABASE_USERNAME!;
const dbPassword = process.env.DATABASE_PASSWORD!;
const dbName = process.env.DATABASE_NAME!;
const itemsCollectionName = 'items';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    console.log(req.method)

    switch(req.method) {
        case 'POST':
          saveNewItemToDatabase(dbUserName, dbPassword, dbName, itemsCollectionName, req.body)
          res.status(200).json(req.body)

        default:
          const items = await getDataFromDatabaseCollection(dbUserName, dbPassword, dbName, itemsCollectionName)
          res.status(200).json({ items  })
    }
}

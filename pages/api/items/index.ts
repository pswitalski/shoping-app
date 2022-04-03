// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDataFromDatabaseCollection } from '../../../utils/getDataFromDatabaseCollection';
import { saveNewItemToDatabase } from '../../../utils/saveNewItemToDatabase';
import { removeItemsFromDatabase } from '../../../utils/removeItemsFromDatabase';

const dbUserName = process.env.DATABASE_USERNAME!;
const dbPassword = process.env.DATABASE_PASSWORD!;
const dbName = process.env.DATABASE_NAME!;
const itemsCollectionName = 'items';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    switch(req.method) {
        case 'POST':
          const newId = await saveNewItemToDatabase(dbUserName, dbPassword, dbName, itemsCollectionName, req.body)
          console.log(newId)
          res.status(200).json({id: newId})
          break;

        case 'DELETE':
          if (!!req.body.deleteAll) {
            await removeItemsFromDatabase(dbUserName, dbPassword, dbName, itemsCollectionName);
            res.status(200).json({ message: 'All items removed'} );
          } else {
            const targets = req.body.deleteTargetIds;
            await removeItemsFromDatabase(dbUserName, dbPassword, dbName, itemsCollectionName, targets);

            res.status(200).json({
              message: 'Selected items removed',
              items: targets,
            } );
          }

          break;

        default:
          const items = await getDataFromDatabaseCollection(dbUserName, dbPassword, dbName, itemsCollectionName)
          res.status(200).json({ items  })
    }
}

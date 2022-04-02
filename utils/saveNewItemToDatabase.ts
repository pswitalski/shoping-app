import { MongoClient } from "mongodb";
import { Item } from "../types/item";

export async function saveNewItemToDatabase(
    username: string,
    password: string,
    databaseName: string,
    collectionName: string,
    item: Item,
) {
    console.log(item)

    if (!username || !password || !databaseName || !collectionName || !item) return;

    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.xct7f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

    try {
        const db = client.db(databaseName);
        const itemsCollection = db.collection(collectionName);

        const newItem = {
            name: item.name,
            quantity: item.quantity,
            unit: item.unit,
        }

        itemsCollection.insertOne({...newItem})

    } catch(err) {
        console.error((err as Error).message)
    }


}
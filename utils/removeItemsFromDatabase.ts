import { MongoClient } from "mongodb";

export async function removeItemsFromDatabase(
    username: string,
    password: string,
    databaseName: string,
    collectionName: string,
) {
    if (!username || !password || !databaseName || !collectionName) return;

    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.xct7f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

    try {
        const db = client.db(databaseName);
        const itemsCollection = db.collection(collectionName);

        itemsCollection.deleteMany({})

    } catch(err) {
        console.error((err as Error).message)
    }
}
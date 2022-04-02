import { MongoClient, ObjectId } from 'mongodb';

export async function getDataFromDatabaseCollection(
    username: string,
    password: string,
    databaseName: string,
    collectionName: string,
    dataId?: string
) {
    if (!username || !password || !databaseName || !collectionName) return;

    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.xct7f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

    try {
        const db = client.db(databaseName);
        const itemsCollection = db.collection(collectionName);

        let data;

        if (dataId) {
            const id = new ObjectId(`${dataId}`);
            data = await itemsCollection.find({"_id": id}).toArray();
        } else {
            data = await itemsCollection.find().toArray();
        }

        client.close();

        return data;

    } catch(err) {
        console.error((err as Error).message)
    }
}
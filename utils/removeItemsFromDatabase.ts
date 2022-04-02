import { MongoClient, ObjectId } from "mongodb";

export async function removeItemsFromDatabase(
    username: string,
    password: string,
    databaseName: string,
    collectionName: string,
    targets?: string[],
) {
    if (!username || !password || !databaseName || !collectionName) return;

    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.xct7f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

    try {
        const db = client.db(databaseName);
        const itemsCollection = db.collection(collectionName);

        if (targets) {
            if (targets.length === 1) {
                const targetId = new ObjectId(`${targets[0]}`);
                itemsCollection.deleteOne({"_id": targetId})
            } else {
                const ids = targets.map(target => (new ObjectId(`${target}`)));
                itemsCollection.deleteMany({"_id": {$in: ids}})
            }
        } else {
            itemsCollection.deleteMany({})
        }

    } catch(err) {
        console.error((err as Error).message)
    }
}
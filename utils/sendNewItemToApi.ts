import { Item } from '../types/item';

const url = 'http://localhost:3000/api/items';

export async function sendNewItemToApi(values: Item) {
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })

    return response;
}

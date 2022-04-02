
const url = 'http://localhost:3000/api/items';

export async function sendDeleteAllRequestToApi() {
    const response = await fetch(url, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ deleteAll: true })
    })

    return response;
}
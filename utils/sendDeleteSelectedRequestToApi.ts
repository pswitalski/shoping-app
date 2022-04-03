const url = 'http://localhost:3000/api/items';

export async function sendDeleteSelectedRequestToApi(selectedItems: string[]) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            deleteAll: false,
            deleteTargetIds: selectedItems,
        })
    })

    return response;
}
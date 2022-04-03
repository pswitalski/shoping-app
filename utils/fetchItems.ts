import { Item } from "../types/item";

const url = 'http://localhost:3000/api/items';

export const fetchItems = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

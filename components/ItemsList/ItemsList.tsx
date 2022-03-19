import { FunctionComponent, useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Item from "./Item/Item";
import { Units } from '../../types/units';
import { Item as ItemType } from '../../types/item';

const url = 'http://localhost:3000/api/items';

const ItemsList: FunctionComponent = () => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        const fetchItems = async (url: string) => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setItems(data.items);
        }

        fetchItems(url);
    }, [])

    const generateItems = () => (
        (items as ItemType[]).map((item, index) => (
            <Item
                key={item.name}
                productName={item.name}
                quantity={item.quantity}
                unit={item.unit as Units}
                isLast={index === items.length-1}
                author={item.author}
            />
        ))
    )

    return(
        <Box>
            {items.length === 0 && <CircularProgress sx={{mx: 'auto', display: 'block'}} />}
            {generateItems()}

        </Box>
    )
}

export default ItemsList;
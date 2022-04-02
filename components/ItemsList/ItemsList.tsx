import { FunctionComponent, useState, useEffect, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';
import Item from "./Item/Item";
import { Units } from '../../types/units';
import { Item as ItemType } from '../../types/item';
import { AppDispatch } from '../../stores/store';

const url = 'http://localhost:3000/api/items';

interface ItemsListProps {
    dispatch: AppDispatch;
    items: {
        itemsList: ItemType[]
    }
}

const ItemsList: FunctionComponent<ItemsListProps> = ({items, dispatch}) => {
    useEffect( () => {
        const fetchItems = async (url: string) => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            dispatch({
                type: 'items/addItems',
                payload: data.items
            })
        }

        fetchItems(url);
    }, [])

    const generateItems = () => (
        (items.itemsList as ItemType[]).map((item, index) => (
            <Item
                key={item.name}
                productName={item.name}
                quantity={item.quantity}
                unit={item.unit as Units}
                isLast={index === items.itemsList.length-1}
                author={item.author}
            />
        ))
    )

    return(
        <Box>
            {items.itemsList.length === 0 && <CircularProgress sx={{mx: 'auto', display: 'block'}} />}
            {generateItems()}

        </Box>
    )
}

function mapStateToProps(state: ItemsListProps) {
    return { items: state.items }
}

export default connect(mapStateToProps)(ItemsList);
import { FunctionComponent, useState, useEffect, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import Item from "./Item/Item";
import { Units } from '../../types/units';
import { Item as ItemType } from '../../types/item';
import { AppDispatch } from '../../stores/store';

interface ItemsListProps {
    dispatch: AppDispatch;
    items: {
        itemsList: ItemType[]
    }
}

const ItemsList: FunctionComponent<ItemsListProps> = ({items, dispatch}) => {
    useEffect( () => {
        dispatch({ type: 'FETCH_ITEMS' })
    }, [])

    const generateItems = () => (
        (items.itemsList as ItemType[]).map((item, index) => (
            <Item
                key={item._id}
                productName={item.name}
                quantity={item.quantity}
                unit={item.unit as Units}
                isLast={index === items.itemsList.length-1}
                author={item.author}
                id={item._id!}
            />
        ))
    )

    return(
        <Box>
            {items.itemsList.length === 0 &&
            <Typography
                component='p'
                variant='h6'
                color={`${blue[700]}`}
                textAlign='center'
            >
                List is empty
            </Typography>
            }
            {generateItems()}
        </Box>
    )
}

function mapStateToProps(state: ItemsListProps) {
    return { items: state.items }
}

export default connect(mapStateToProps)(ItemsList);
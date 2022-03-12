import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import Item from "./Item/Item";
import { Units } from '../../types/units';

const ItemsList: FunctionComponent = () => {
    return(
        <Box>
            <Item
                productName='item 1'
                quantity={1}
                unit={Units.kilograms}
                author={{username: 'test'}}
            />
            <Item
                productName='item 2'
                quantity={1}
                unit={Units.kilograms}
                author={{username: 'test'}}
            />
            <Item
                productName='item 3'
                quantity={1}
                unit={Units.kilograms}
                author={{username: 'test'}}
                isLast
            />
        </Box>
    )
}

export default ItemsList;
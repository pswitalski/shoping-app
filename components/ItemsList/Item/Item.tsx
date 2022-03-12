import { FunctionComponent } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { StyledItemBody, StyledItemDataContainer, StyledSmallContainer } from './atoms/atoms';
import UserProfile from '../../UserProfile/UserProfile';
import { Units } from '../../../types/units';
import type { User } from '../../../types/user';

interface ItemProps {
    productName: string;
    quantity: number;
    unit: Units;
    author: User;
    isLast: boolean;
}

const Item: FunctionComponent = () => {
    return(
        <StyledItemBody>
            <StyledSmallContainer>
                <UserProfile username='test' />
            </StyledSmallContainer>

            <StyledItemDataContainer>
                <Typography component='p' variant='h6'>
                    Product name
                </Typography>

                <Typography component='p' variant='body1'>
                    500 ml
                </Typography>
            </StyledItemDataContainer>

            <StyledSmallContainer>
                <Checkbox size='medium' />
            </StyledSmallContainer>
        </StyledItemBody>
    )
}

export default Item;
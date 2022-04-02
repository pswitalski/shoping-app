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
    author?: User;
    isLast?: boolean;
}

const Item: FunctionComponent<ItemProps> = ({
    productName,
    quantity,
    unit,
    author,
    isLast
}) => {
    return(
        <StyledItemBody isLast={isLast}>
            <StyledSmallContainer>
                {author && <UserProfile username={author.name} />}
            </StyledSmallContainer>

            <StyledItemDataContainer>
                <Typography component='p' variant='h6'>
                    {productName}
                </Typography>

                <Typography component='p' variant='body1'>
                    {`${quantity} ${unit}`}
                </Typography>
            </StyledItemDataContainer>

            <StyledSmallContainer>
                <Checkbox size='medium' />
            </StyledSmallContainer>
        </StyledItemBody>
    )
}

export default Item;
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, Typography } from '@mui/material';
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
    id: string;
}

const Item: FunctionComponent<ItemProps> = ({
    productName,
    quantity,
    unit,
    author,
    isLast,
    id
}) => {
    const dispatch = useDispatch();

    const checkHandler = (e) => {
        if (e.target.checked) {
            dispatch({
                type: 'selectedItems/selectSingleItem',
                payload: {
                    selectedItemId: id
                }
             })
        } else {
            dispatch({
                type: 'selectedItems/unselectSingleItem',
                payload: {
                    selectedItemId: id
                }
             })
        }
    }

    return(
        <StyledItemBody isLast={isLast}>
            <StyledSmallContainer>
                {author && <UserProfile username={author.name} src={author.image} />}
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
                <Checkbox size='medium' onChange={checkHandler} />
            </StyledSmallContainer>
        </StyledItemBody>
    )
}

export default Item;
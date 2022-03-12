import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface StyledItemBodyProps {
    isLast?: boolean;
}

export const StyledItemBody =  styled(Box)<StyledItemBodyProps>`
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    grid-template-rows: 70px;
    border-bottom: ${props => props.isLast ? 'none' : '1px solid gray'};
`;

export const StyledSmallContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const StyledItemDataContainer = styled(Box)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    margin: 0 10px;
`;
import { FunctionComponent } from 'react';
import { Typography, Box, Paper } from "@mui/material";
import styled from "@emotion/styled";

interface StartingContainerProps {
    children: string;
}

const StyledPaper = styled(Paper)`
    padding: 10px;
    width: 350px;
    margin: auto;
    height: 80vh;
    max-height: 500px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StartingContainer: FunctionComponent<StartingContainerProps> = ({children}) => {
    return(
        <StyledPaper elevation={8}>
            <Typography
                component="h1"
                variant="h4"
            >
                {children}
            </Typography>
        </StyledPaper>
    )
}

export default StartingContainer;
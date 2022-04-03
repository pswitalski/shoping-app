import { FunctionComponent } from 'react';
import { Typography, Box, Paper } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import LetsStartInfo from './LetsStartInfo/LetsStartInfo';
import ProviderForm from './ProviderForm/ProviderForm';
import { useSession } from "next-auth/react"


interface StartingContainerProps {
    children: string;
}

const StyledPaper = styled(Paper)`
    padding: 10px 10px 30px;
    width: 350px;
    margin: auto;
    max-height: 500px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StartingContainer: FunctionComponent<StartingContainerProps> = ({children}) => {
    const sessionData = useSession()

    return(
        <StyledPaper elevation={8}>
            <Typography
                component="h1"
                variant="h4"
            >
                {children}
            </Typography>

            <ProviderForm />
            {/* <LoginForm /> */}
            {/* <RegisterForm /> */}
            {/* <LetsStartInfo /> */}
        </StyledPaper>
    )
}

export default StartingContainer;
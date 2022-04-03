import { FunctionComponent, useEffect } from 'react';
import Router from 'next/router';
import { Button, Typography } from "@mui/material";
import { StyledForm } from '../atoms/StartingContainerAtoms';
import { signIn, useSession } from "next-auth/react"

const ProviderForm: FunctionComponent = () => {
    const session = useSession();

    useEffect(() => {
        if (session.status === 'authenticated') {
            Router.push('/dashboard');
        }
    },[session])

    return(
        <StyledForm>
            <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                Login with provider
            </Typography>
            <Button onClick={() => signIn()} variant="contained" color="primary">Log in with Google</Button>
        </StyledForm>
    )
}

export default ProviderForm;
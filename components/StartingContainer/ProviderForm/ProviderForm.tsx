import { FunctionComponent, useEffect, useState } from 'react';
import Router from 'next/router';
import { Button, Typography } from "@mui/material";
import { StyledForm } from '../atoms/StartingContainerAtoms';
import { signIn, useSession, getProviders } from "next-auth/react"

interface providerType {
    google?: {
        id: string;
    }
}

const ProviderForm: FunctionComponent = () => {
    const session = useSession();
    const [providers, setProviders] = useState<providerType>({})

    useEffect(() => {
        const waitForProviders = async () => {
            const providers = await getProviders();
            setProviders(providers as providerType);
        }
        waitForProviders();
    }, []);

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
            {providers.google &&
            <Button onClick={() => signIn(providers.google?.id)} variant="contained" color="primary">Log in with Google</Button>}
        </StyledForm>
    )
}

export default ProviderForm;
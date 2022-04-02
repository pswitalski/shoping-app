import { FunctionComponent } from 'react';
import { Button, Typography } from "@mui/material";
import { StyledForm, StyledTextField } from '../atoms/StartingContainerAtoms';
import { signIn } from "next-auth/react"

const ProviderForm: FunctionComponent = () => {
    return(
        <StyledForm>
            <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                Login with provider
            </Typography>
            {/* <StyledTextField
                variant="outlined"
                label="E-mail"
            />
            <StyledTextField
                variant="outlined"
                label="Password"
            />
            <StyledTextField
                variant="outlined"
                label="Confirm password"
            />
            <Button variant="contained" color="success">Register</Button>
            <br/>
            <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                Do you already have an account?
            </Typography> */}
            <Button onClick={() => signIn()} variant="contained" color="primary">Log in with Google</Button>
        </StyledForm>
    )
}

export default ProviderForm;
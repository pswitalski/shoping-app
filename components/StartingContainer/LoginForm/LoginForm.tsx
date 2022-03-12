import { Button, Typography } from "@mui/material";
import { FunctionComponent } from 'react';
import { StyledForm, StyledTextField } from '../atoms/StartingContainerAtoms';

const LoginForm: FunctionComponent = () => {
    return(
        <StyledForm>
            <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                Log in
            </Typography>
            <StyledTextField
                variant="outlined"
                label="E-mail"
            />
            <StyledTextField
                variant="outlined"
                label="Password"
            />
            <Button variant="contained" color="success">Login</Button>
            <br/>
            <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                Don&apos;t you have an account yet?
            </Typography>
            <Button variant="contained" color="primary">Create account</Button>
        </StyledForm>
    )
}

export default LoginForm;
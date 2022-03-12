import { FunctionComponent } from 'react';
import { Button, Typography } from "@mui/material";
import { StyledForm, StyledTextField } from '../atoms/StartingContainerAtoms';

const RegisterForm: FunctionComponent = () => {
    return(
        <StyledForm>
            <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                Create new account
            </Typography>
            <StyledTextField
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
            </Typography>
            <Button variant="contained" color="primary">Log in</Button>
        </StyledForm>
    )
}

export default RegisterForm;
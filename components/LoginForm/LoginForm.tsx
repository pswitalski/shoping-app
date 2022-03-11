import { TextField, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;
`;

const StyledTextField = styled(TextField)`
    margin-bottom: 14px;
    width: 90%;
`;

const LoginForm = () => {
    return(
        <StyledForm>
            <StyledTextField
                variant="outlined"
                label="E-mail"
            />
            <StyledTextField
                variant="outlined"
                label="password"
            />
            <Button variant="contained" color="success">Login</Button>
        </StyledForm>
    )
}

export default LoginForm;
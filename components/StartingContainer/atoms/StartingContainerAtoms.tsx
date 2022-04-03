import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    min-height: 80px;
`;

export const StyledTextField = styled(TextField)`
    margin-bottom: 14px;
    width: 90%;
`;
import { FunctionComponent } from 'react';
import { Typography, Button } from "@mui/material";

const LetsStartInfo: FunctionComponent = () => {
    return(
        <>
            <Typography component="h2" variant="subtitle1" sx={{ mt: 2 }}>
                Looks like you are already logged in.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                Let&apos;s start
            </Button>
        </>
    )
}

export default LetsStartInfo;
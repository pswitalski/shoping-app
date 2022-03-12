import { FunctionComponent } from 'react';
import MuiLink from '@mui/material/Link';

const CategoryLink: FunctionComponent = () => {
    return(
        <MuiLink
            sx={{
                my: 2
            }}
        >
            category link
        </MuiLink>
    )
}

export default CategoryLink;
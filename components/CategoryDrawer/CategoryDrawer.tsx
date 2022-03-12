import { FunctionComponent } from 'react';
import { Drawer, Box } from '@mui/material';
import CategoryLink from './CategoryLink/CategoryLink';

const CategoryDrawer: FunctionComponent = () => {
    return(
        <Drawer open={true}>
            <Box
                sx={{
                    mt: 10,
                    pl: 3,
                    width: 200,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <CategoryLink />
                <CategoryLink />
                <CategoryLink />
            </Box>
        </Drawer>
    )
}

export default CategoryDrawer;
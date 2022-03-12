import { FunctionComponent } from 'react';
import Fab from '@mui/material/Fab';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Box from '@mui/material/Box';

const RemoveItemsButton: FunctionComponent = () => {
    return(
        <Box
            sx={{
                position: 'fixed',
                bottom: 20,
                left: 20,
            }}
        >
            <Fab
                aria-label='add'
                color='error'
                size='large'
            >
                <DeleteForeverIcon />
            </Fab>
        </Box>
    )
}

export default RemoveItemsButton;
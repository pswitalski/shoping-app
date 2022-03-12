import { FunctionComponent } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

const AddNewItemButton: FunctionComponent = () => {
    return(
        <Box
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
            }}
        >
            <Fab
                aria-label='add'
                color='primary'
                size='large'
            >
                <AddIcon />
            </Fab>
        </Box>
    )
}

export default AddNewItemButton;
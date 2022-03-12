import { FunctionComponent } from 'react';
import { Paper, Modal, Button, Box, Stack } from '@mui/material';

const paperStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    boxShadow: 24,
    p: 4,
  };

const NewItemsModal: FunctionComponent = () => {
    return(
        <Modal
            open
        >
            <Paper sx={paperStyle}>
                modal
                <Stack
                    direction="row"
                    sx={{ justifyContent: 'center' }}
                >
                    <Button variant='contained' color='success' sx={{mx: 1}}>
                        Add
                    </Button>

                    <Button variant="contained" color='error' sx={{mx:1}}>
                        Cancel
                    </Button>
                </Stack>
            </Paper>
        </Modal>
    )
}

export default NewItemsModal;
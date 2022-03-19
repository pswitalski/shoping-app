import { FunctionComponent } from 'react';
import {
    Paper,
    Modal,
    Box,
    Button,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material';
import { Units } from '../../types/units';

const paperStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    boxShadow: 24,
    px: 3,
    py: 2,
  };

  const unitsOptions = Object.keys(Units).map(unit => (
      <MenuItem key={unit} value={unit}>
        {unit}
      </MenuItem>
  ))

interface NewItemsModalProps {
    closeHandler: () => void;
}

const NewItemsModal: FunctionComponent<NewItemsModalProps> = ({closeHandler}) => {
    return(
        <Modal
            open
        >
            <Paper sx={paperStyle}>
                <form>
                <Typography
                    component="h3"
                    variant="h6"
                    textAlign="center"
                >
                    Add new item:
                </Typography>

                <Box
                    sx={{
                        my: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: 200,
                    }}
                >
                    <TextField label="Item" variant="outlined"/>
                    <TextField label="Quantity" variant="outlined" type="number" />

                    <FormControl fullWidth>
                        <InputLabel id="unit-label">Unit</InputLabel>
                        <Select
                          labelId="unit-label"
                          id="unit"
                         label="Unit"
                        >
                            {unitsOptions}
                        </Select>
                    </FormControl>

                </Box>

                 <Stack
                      direction="row"
                      sx={{ justifyContent: 'center' }}
                    >
                        <Button variant='contained' color='success'     sx={{mx: 1}}>
                            Add
                        </Button>

                        <Button variant="contained" color='error' sx=   {{mx:1}} onClick={closeHandler}>
                            Cancel
                       </Button>
                 </Stack>
                </form>
            </Paper>
        </Modal>
    )
}

export default NewItemsModal;
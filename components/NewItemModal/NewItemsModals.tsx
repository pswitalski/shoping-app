import { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
import { Item } from '../../types/item';
import { User } from '../../types/user';
import { sendNewItemToApi } from '../../utils/sendNewItemToApi';
import { useSession } from "next-auth/react"

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
    closeHandler: Dispatch<SetStateAction<boolean>>;
}

const validationSchema = yup.object({
    name: yup
      .string()
      .required('Item name is required'),
    unit: yup
      .string()
      .required('Unit is required'),
    quantity: yup
        .string()
        .required('Quantity is required'),
  });

const NewItemsModal: FunctionComponent<NewItemsModalProps> = ({closeHandler}) => {
    const session = useSession();

    const formik = useFormik({
        initialValues: {
          name: '',
          quantity: '',
          unit: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const itemValues = {
                ...values,
                quantity: parseInt(values.quantity),
                author: session.data?.user as User,
            };
            console.log(itemValues)

            const response = await sendNewItemToApi(itemValues);

            if (response.status === 200) {
                console.log('success')
                closeHandler(false);
            } else {
                console.error('Something went wrong')
            }
        },
      });

    return(
        <Modal
            open
        >
            <Paper sx={paperStyle}>
                <form onSubmit={formik.handleSubmit}>
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
                        height: 240,
                    }}
                >
                    <TextField
                        label="Item name"
                        id="name"
                        name="name"
                        variant="outlined"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        label="Quantity"
                        id="quantity"
                        name="quantity"
                        variant="outlined"
                        type="number"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                        helperText={formik.touched.quantity && formik.errors.quantity}
                        />

                    <FormControl fullWidth>
                        <InputLabel id="unit-label">Unit</InputLabel>
                        <Select
                          labelId="unit-label"
                          id="unit"
                          name="unit"
                         label="Unit"
                         value={formik.values.unit}
                         onChange={formik.handleChange}
                         error={formik.touched.unit && Boolean(formik.errors.unit)}
                        >
                            {unitsOptions}
                        </Select>
                    </FormControl>

                </Box>

                 <Stack
                      direction="row"
                      sx={{ justifyContent: 'center' }}
                    >
                        <Button variant='contained' color='success' type='submit'    sx={{mx: 1}}>
                            Add
                        </Button>

                        <Button variant="contained" color='error' sx=   {{mx:1}} onClick={() => closeHandler(false)}>
                            Cancel
                       </Button>
                 </Stack>
                </form>
            </Paper>
        </Modal>
    )
}

export default NewItemsModal;
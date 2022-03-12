import type { NextPage } from 'next';
import { Box } from '@mui/material';
import ItemsList from '../components/ItemsList/ItemsList';
import AddNewItemButton from '../components/AddNewItemButton/AddNewItemButton';
import RemoveItemsButton from '../components/RemoveItemsButton/RemoveItemsButton';
import NewItemsModal from '../components/NewItemModal/NewItemsModals';

const Dashboard: NextPage = () => {
    return(
        <Box>
            <ItemsList />
            <AddNewItemButton />
            <RemoveItemsButton />
            <NewItemsModal />
        </Box>
    )
}

export default Dashboard;

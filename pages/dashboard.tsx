import type { NextPage } from 'next';
import { Box } from '@mui/material';
import ItemsList from '../components/ItemsList/ItemsList';
import AddNewItemButton from '../components/AddNewItemButton/AddNewItemButton';
import RemoveItemsButton from '../components/RemoveItemsButton/RemoveItemsButton';
import NewItemsModal from '../components/NewItemModal/NewItemsModals';
import CategoryDrawer from '../components/CategoryDrawer/CategoryDrawer';

const Dashboard: NextPage = () => {
    return(
        <Box>
            <ItemsList />
            <AddNewItemButton />
            <RemoveItemsButton />
            {/* <NewItemsModal /> */}
            {/* <CategoryDrawer /> */}
        </Box>
    )
}

export default Dashboard;

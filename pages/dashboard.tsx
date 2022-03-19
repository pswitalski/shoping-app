import { useState } from 'react';
import type { NextPage } from 'next';
import { Box } from '@mui/material';
import ItemsList from '../components/ItemsList/ItemsList';
import AddNewItemButton from '../components/AddNewItemButton/AddNewItemButton';
import RemoveItemsButton from '../components/RemoveItemsButton/RemoveItemsButton';
import NewItemsModal from '../components/NewItemModal/NewItemsModals';
import CategoryDrawer from '../components/CategoryDrawer/CategoryDrawer';
import Deletedialog from '../components/DeleteDialog/DeleteDialog';

const Dashboard: NextPage = () => {
    const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);

    const openNewItemModalHandler = () => {
        setIsNewItemModalOpen(true)
    }

    return(
        <Box>
            <ItemsList />
            <AddNewItemButton onClick={openNewItemModalHandler} />
            <RemoveItemsButton />
            {isNewItemModalOpen && <NewItemsModal closeHandler={setIsNewItemModalOpen} />}
            {/* <CategoryDrawer /> */}
            {/* <Deletedialog /> */}
        </Box>
    )
}

export default Dashboard;

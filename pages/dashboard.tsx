import { useState } from 'react';
import type { NextPage } from 'next';
import { Box } from '@mui/material';
import ItemsList from '../components/ItemsList/ItemsList';
import AddNewItemButton from '../components/AddNewItemButton/AddNewItemButton';
import RemoveItemsButton from '../components/RemoveItemsButton/RemoveItemsButton';
import NewItemsModal from '../components/NewItemModal/NewItemsModals';
import CategoryDrawer from '../components/CategoryDrawer/CategoryDrawer';
import DeleteDialog from '../components/DeleteDialog/DeleteDialog';
import { sendDeleteAllRequestToApi } from '../utils/sendDeleteAllRequestToApi';

const Dashboard: NextPage = () => {
    const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openNewItemModalHandler = () => {
        setIsNewItemModalOpen(true)
    }

    const openDeleteModalHandler = () => {
        setIsDeleteModalOpen(true);
    }

    const closeDeleteModalHandler = () => {
        setIsDeleteModalOpen(false);
    }

    const deleteAllHandler = async () => {
        await sendDeleteAllRequestToApi();
        setIsDeleteModalOpen(false);
    }


    return(
        <Box>
            <ItemsList />
            <AddNewItemButton onClick={openNewItemModalHandler} />
            <RemoveItemsButton onClick={openDeleteModalHandler} />
            {isNewItemModalOpen && <NewItemsModal closeHandler={setIsNewItemModalOpen} />}
            {/* <CategoryDrawer /> */}
            {isDeleteModalOpen
                &&
            <DeleteDialog
                closeDialogHandler={closeDeleteModalHandler}
                deleteAllHandler={deleteAllHandler}
            />}
        </Box>
    )
}

export default Dashboard;

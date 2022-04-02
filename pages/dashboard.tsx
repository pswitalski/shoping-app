import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import { useSession } from "next-auth/react"
import { Box } from '@mui/material';
import ItemsList from '../components/ItemsList/ItemsList';
import AddNewItemButton from '../components/AddNewItemButton/AddNewItemButton';
import RemoveItemsButton from '../components/RemoveItemsButton/RemoveItemsButton';
import NewItemsModal from '../components/NewItemModal/NewItemsModals';
import CategoryDrawer from '../components/CategoryDrawer/CategoryDrawer';
import DeleteDialog from '../components/DeleteDialog/DeleteDialog';
import { sendDeleteAllRequestToApi } from '../utils/sendDeleteAllRequestToApi';
import { useDispatch } from 'react-redux';

const Dashboard: NextPage = (props) => {
    console.log('dashboard props: ', props)
    const session = useSession();
    const dispatch = useDispatch();

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
        dispatch({ type: 'items/clearAll' })
        setIsDeleteModalOpen(false);
    }

    useEffect(() => {
        if (session.status === 'unauthenticated') {
            Router.push('/');
        }
    }, [session])

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

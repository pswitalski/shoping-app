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
import { useDispatch, connect } from 'react-redux';

interface DashboardProps {
    isDeleteModalOpen: boolean;
    isNewItemModalOpen: boolean;
}

const Dashboard: NextPage<DashboardProps> = ({ isDeleteModalOpen, isNewItemModalOpen }) => {
    const session = useSession();
    const dispatch = useDispatch();

    const openNewItemModalHandler = () => {
        dispatch({ type: 'modals/openAddItem' });
    }

    const closeNewItemModalHandler = () => {
        dispatch({ type: 'modals/closeAddItem' });
    }

    const openDeleteModalHandler = () => {
        dispatch({ type: 'modals/openRemoveItem' });
    }

    const closeDeleteModalHandler = () => {
        dispatch({ type:  'modals/closeRemoveItem'});
    }

    const deleteAllHandler = async () => {
        dispatch({ type: 'items/clearAll' });
        dispatch({ type:  'modals/closeRemoveItem'});
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
            {isNewItemModalOpen && <NewItemsModal closeHandler={closeNewItemModalHandler} />}
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

interface stateToPropsType {
    modals: {
        delete: boolean;
        add: boolean;
    }
}


function mapStateToProps(state: stateToPropsType) {
    return {
        isDeleteModalOpen: state.modals.delete,
        isNewItemModalOpen: state.modals.add,
    }
}

export default connect(mapStateToProps)(Dashboard);

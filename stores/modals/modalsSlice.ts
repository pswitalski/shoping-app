import { createSlice } from '@reduxjs/toolkit';

const initialModalsOpen = {
    add: false,
    delete: false,
}

export const modalsSlice = createSlice({
    name: 'modals',
    initialState: initialModalsOpen,
    reducers: {
        openAddItem(state) {
            state.add = true;
        },
        closeAddItem(state) {},
        openRemoveItem(state) {
            state.delete = true;
        },
        closeRemoveItem(state) {
            state.delete = false;
        },
    },
})

export const { openAddItem, openRemoveItem, closeAddItem, closeRemoveItem } = modalsSlice.actions;

export default modalsSlice.reducer;
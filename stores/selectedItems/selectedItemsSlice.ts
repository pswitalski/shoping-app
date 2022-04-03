import { createSlice } from '@reduxjs/toolkit';

const initialSelectedItems = { selectedItemsIdsList: [] as string[] }

export const selectedItemsSlice = createSlice({
    name: 'selectedItems',
    initialState: initialSelectedItems,
    reducers: {
        selectSingleItem(state, action) {
            state.selectedItemsIdsList = [...state.selectedItemsIdsList, action.payload.selectedItemId];
        },
        unselectSingleItem(state, action) {
            const oldIdsArray = [...state.selectedItemsIdsList];
            const filteredIdsArray = oldIdsArray.filter(id => id !== action.payload.selectedItemId)
            state.selectedItemsIdsList = filteredIdsArray;
        }
    },
})

export const { selectSingleItem, unselectSingleItem } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
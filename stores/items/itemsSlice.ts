import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../../types/item';

const initialItems = { itemsList: [] as Item[] }

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initialItems,
    reducers: {
        clearAll(state) {
            state.itemsList = [];
        },
        addItems(state, action) {
            state.itemsList = action.payload
        },
        addSingleItem(state, action) {
            console.log(state, action)
            state.itemsList = [...state.itemsList, action.payload];
        },
        removeSingleItem(state, action) {}
    },
})

export const { clearAll,addItems, addSingleItem, removeSingleItem } = itemsSlice.actions;

export default itemsSlice.reducer;
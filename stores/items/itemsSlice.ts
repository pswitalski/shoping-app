import { createSlice } from '@reduxjs/toolkit';

const initialItems = { itemsList: [] }

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initialItems,
    reducers: {
        clearAll(state) {
            state = initialItems;
        },
        addItems(state, action) {
            state.itemsList = action.payload
        }
    },
})

export const { clearAll,addItems } = itemsSlice.actions;

export default itemsSlice.reducer;
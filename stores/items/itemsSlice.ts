import { createSlice } from '@reduxjs/toolkit';

const initialItems = {};

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initialItems,
    reducers: {
        clearAll: (state) => {
            state = initialItems;
        },
    },
})

export const { clearAll } = itemsSlice.actions;

export default itemsSlice.reducer;
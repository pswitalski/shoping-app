import { createSlice, current } from '@reduxjs/toolkit';
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
            state.itemsList = action.payload.items;
        },
        addSingleItem(state, action) {
            state.itemsList = [...state.itemsList, action.payload];
        },
        removeSelectedItem(state, action) {
            const oldArray = [...current(state.itemsList)];

            const newArray = oldArray.filter(item => {
                let valid = true;

                action.payload.forEach((id: string) => {
                    if  (id === item._id) {
                        valid = false
                    }
                })

                return valid;
            })

            state.itemsList = newArray;
        }
    },
})

export const { clearAll,addItems, addSingleItem, removeSelectedItem } = itemsSlice.actions;

export default itemsSlice.reducer;
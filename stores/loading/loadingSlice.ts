import { createSlice } from '@reduxjs/toolkit';

const initialLoadingState = {
    isLoading: false,
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialLoadingState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        stopLoading(state) {
            state.isLoading = false;
        }
    },
})

export const { startLoading, stopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
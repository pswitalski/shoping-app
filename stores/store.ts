import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items/itemsSlice';
import { useDispatch } from 'react-redux';

const store =  configureStore({
  reducer: {
      items: itemsReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
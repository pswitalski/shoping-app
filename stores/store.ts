import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items/itemsSlice';

export default configureStore({
  reducer: {
      items: itemsReducer,
  },
})
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import itemsReducer from './items/itemsSlice';
import { useDispatch } from 'react-redux';
import itemsSaga from '../sagas/itemsSaga';
import modalsReducer from './modals/modalsSlice';
import loadingReducer from './loading/loadingSlice';
import selectedItemsReducer from './selectedItems/selectedItemsSlice';

const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
  reducer: {
      items: itemsReducer,
      modals: modalsReducer,
      loading: loadingReducer,
      selectedItems: selectedItemsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(itemsSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
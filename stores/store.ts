import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import itemsReducer from './items/itemsSlice';
import { useDispatch } from 'react-redux';
import itemsSaga from '../sagas/itemsSaga';

const sagaMiddleware = createSagaMiddleware();
console.log(sagaMiddleware)

const store =  configureStore({
  reducer: {
      items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(itemsSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Item } from '../types/item';
import { sendDeleteAllRequestToApi } from '../utils/sendDeleteAllRequestToApi';
import { sendNewItemToApi } from '../utils/sendNewItemToApi';
import { fetchItems } from '../utils/fetchItems';
import { sendDeleteSelectedRequestToApi }  from '../utils/sendDeleteSelectedRequestToApi';
import { toast } from 'react-toastify';

const fetchItemsUrl = 'http://localhost:3000/api/items';

function* deleteAllItems() {
   try {
      yield call(sendDeleteAllRequestToApi);
   } catch (e: any) {
      yield call(() => toast.error('Error. Something went wrong.'));
   }
}

function* addSingleItem(action: { payload: Item; type: string; }) {
  try {
     const response: { id: string } =  yield call(() => sendNewItemToApi(action.payload));
      yield put({
         type: 'items/addSingleItem',
         payload: { ...action.payload, _id: response.id }
      })
     yield put({type: 'modals/closeAddItem'});
     yield call(() => toast.success('Item added to list'))
  } catch (e: any) {
     yield call(() => toast.error('Error. Something went wrong.'));
  }
}

function* fetchItemsFromDatabase() {
   try {
      yield put({ type: 'loading/startLoading' });
      const items: Item[] = yield call(() => fetchItems(fetchItemsUrl));
      yield put({ type: 'items/addItems', payload: items })
      yield put({ type: 'loading/stopLoading' });
   } catch (e: any) {
      yield call(() => toast.error('Error. Something went wrong.'));
   }
}

function* deleteSelectedItems(action: { payload: string[]; type: string; }) {
   try {
      yield call(() => sendDeleteSelectedRequestToApi(action.payload))
      yield put({ type: 'modals/closeRemoveItem' });
   } catch (e: any) {
      yield call(() => toast.error('Error. Something went wrong.'));
   }
}

function* itemsSaga() {
  yield takeLatest('items/clearAll', deleteAllItems);
  yield takeEvery('ADD_NEW_ITEM', addSingleItem);
  yield takeLatest('FETCH_ITEMS', fetchItemsFromDatabase);
  yield takeEvery('items/removeSelectedItem', deleteSelectedItems);
}

export default itemsSaga;
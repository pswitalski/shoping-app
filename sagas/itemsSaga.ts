import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Item } from '../types/item';
import { sendDeleteAllRequestToApi } from '../utils/sendDeleteAllRequestToApi';
import { sendNewItemToApi } from '../utils/sendNewItemToApi';
import { fetchItems } from '../utils/fetchItems';

const fetchItemsUrl = 'http://localhost:3000/api/items';

function* deleteAllItems() {
   try {
      yield call(sendDeleteAllRequestToApi);
   } catch (e: any) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* addSingleItem(action: { payload: Item; type: string; }) {
  try {
     yield call(() => sendNewItemToApi(action.payload));
     yield put({type: 'modals/closeAddItem'});
  } catch (e: any) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* fetchItemsFromDatabase() {
   console.log('saga')
   try {
      const items = yield call(() => fetchItems(fetchItemsUrl));
      yield put({ type: 'items/addItems', payload: items })
      console.log(items)
   } catch (e: any) {
      console.log('blad')
   }
}

function* itemsSaga() {
  yield takeLatest('items/clearAll', deleteAllItems);
  yield takeEvery('items/addSingleItem', addSingleItem);
  yield takeLatest('FETCH_ITEMS', fetchItemsFromDatabase);
}

export default itemsSaga;
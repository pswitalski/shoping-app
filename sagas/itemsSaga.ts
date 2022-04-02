import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Item } from '../types/item';
import { sendDeleteAllRequestToApi } from '../utils/sendDeleteAllRequestToApi';
import { sendNewItemToApi } from '../utils/sendNewItemToApi';

function* deleteAllItems() {
    console.log("saga")
   try {
      yield call(sendDeleteAllRequestToApi);
   } catch (e: any) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* addSingleItem(action: { payload: Item; type: string; }) {
   console.log(action)
  try {
     yield call(() => sendNewItemToApi(action.payload));
     yield put({type: 'modals/closeAddItem'});
  } catch (e: any) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* itemsSaga() {
  yield takeLatest('items/clearAll', deleteAllItems);
  yield takeEvery('items/addSingleItem', addSingleItem);
}

export default itemsSaga;
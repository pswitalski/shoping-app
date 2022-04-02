import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { sendDeleteAllRequestToApi } from '../utils/sendDeleteAllRequestToApi';

// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* deleteAllItems() {
    console.log("saga")
   try {
      yield call(sendDeleteAllRequestToApi);
    //   yield put({ type: 'items/clearAll' });
   } catch (e: any) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}



/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* itemsSaga() {
  yield takeLatest('items/clearAll', deleteAllItems);
}

export default itemsSaga;
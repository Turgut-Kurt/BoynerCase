import * as Actions from './actions';

import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {getProductsService} from './service';
import {setProducts} from './slice';

/**
 * get products saga
 * ürünleri getir saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* getProductsSaga() {
  try {
    const response = yield call(getProductsService);
    if (response.status === 200) {
      yield put(setProducts(response.data));
    } else {
      console.log('getProductsSaga error : ');
    }
  } catch (error) {
    console.log('getProductsSaga error : ' + error);
  }
}
export default function* profileSaga() {
  yield takeLatest(Actions.getProductAction.type, getProductsSaga);
}

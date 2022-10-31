import * as Actions from './actions';

import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {getFilterService, getProductsService} from './service';
import {addFavorite, setFilter, setProducts} from './slice';
import {goBack} from '~/utils';
import {showMessage} from 'react-native-flash-message';

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

/**
 * get filter saga
 * filtreleri getir saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* getFilterSaga() {
  try {
    const response = yield call(getFilterService);
    if (response.status === 200) {
      yield put(setFilter(response.data));
    } else {
      console.log('getFilterSaga error : ');
    }
  } catch (error) {
    console.log('getFilterSaga error : ' + error);
  }
}

/**
 * add to favorite saga
 * ürünü favorilere ekle saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* addFavoriteSaga({payload}) {
  try {
    yield put(addFavorite(payload));
    yield call(showMessage, {
      message: 'Başarılı',
      description: 'Ürün başarıyla favorilere eklendi.',
      type: 'success',
    });
    yield call(goBack);
  } catch (error) {
    yield call(showMessage, {
      message: 'Hata',
      description: 'Ürün favori ekleme başarısız',
      type: 'danger',
    });
    console.log('catch addFavoriteSaga error : ' + error);
  }
}
export default function* profileSaga() {
  yield takeLatest(Actions.getProductAction.type, getProductsSaga);
  yield takeLatest(Actions.getFilterAction.type, getFilterSaga);
  yield takeLatest(Actions.addFavoriteAction.type, addFavoriteSaga);
}

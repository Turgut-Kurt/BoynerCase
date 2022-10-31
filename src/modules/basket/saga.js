import * as Actions from './actions';

import {addToBasket, clearBasket, removeToBasket} from './slice';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {goBack} from '~/utils';
import {showMessage} from 'react-native-flash-message/src';

/**
 * add to basket saga
 * ürünü sepete ekle saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* addToBasketSaga({payload}) {
  try {
    // const pageNumber = yield select(pageNumberSelector);
    yield put(addToBasket(payload));
    yield call(showMessage, {
      message: 'Başarılı',
      description: 'Ürün başarıyla sepete eklendi.',
      type: 'success',
    });
    yield call(goBack);
  } catch (error) {
    yield call(showMessage, {
      message: 'Hata',
      description: 'Ürün ekleme başarısız',
      type: 'danger',
    });
    console.log('catch addToBasketSaga error : ' + error);
  }
}

/**
 * remove to basket saga
 * ürünü sepetten sil saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* removeToBasketSaga({payload}) {
  try {
    yield put(removeToBasket(payload));
    yield call(showMessage, {
      message: 'Başarılı',
      description: 'Ürün sepetten başarıyla kaldırıldı.',
      type: 'success',
    });
  } catch (error) {
    yield call(showMessage, {
      message: 'Hata',
      description: 'Ürün kaldırma başarısız',
      type: 'danger',
    });
    console.log('catch removeToBasketSaga error : ' + error);
  }
}
/**
 * clear to basket saga
 * sepeti temizle saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* clearBasketSaga() {
  try {
    yield put(clearBasket());
    yield call(showMessage, {
      message: 'Başarılı',
      description: 'Siparişiniz başarıyla tamamlanmıştır. ',
      type: 'success',
    });
  } catch (error) {
    yield call(showMessage, {
      message: 'Hata',
      description: 'Sipariş işlemi başarısız.',
      type: 'danger',
    });
    console.log('catch clearBasketSaga error : ' + error);
  }
}

export default function* basketSaga() {
  yield takeLatest(Actions.addToBasketAction.type, addToBasketSaga);
  yield takeLatest(Actions.removeToBasketAction.type, removeToBasketSaga);
  yield takeLatest(Actions.clearBasketAction.type, clearBasketSaga);
}

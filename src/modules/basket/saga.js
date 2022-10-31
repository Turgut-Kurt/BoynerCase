import * as Actions from './actions';

import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {addToBasket} from './slice';
import {goBack} from '~/utils';
import {showMessage} from 'react-native-flash-message/src';

/**
 * add to basket saga
 * ürünü sepete ekle saga
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* addToBasketSaga({payload}) {
  console.log('addToBasketSaga  : ');
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

export default function* basketSaga() {
  yield takeLatest(Actions.addToBasketAction.type, addToBasketSaga);
}

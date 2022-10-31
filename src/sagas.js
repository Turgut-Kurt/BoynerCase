import {all} from 'redux-saga/effects';
import basketSaga from './modules/basket/saga';
import productSaga from './modules/product/saga';
/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([productSaga(), basketSaga()]);
}

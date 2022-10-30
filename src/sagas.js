import {all} from 'redux-saga/effects';
import productSaga from './modules/product/saga';
/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([productSaga()]);
}

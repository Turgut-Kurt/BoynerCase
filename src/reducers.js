import basketReducer from './modules/basket/slice';
import {combineReducers} from 'redux';
import productReducer from './modules/product/slice';
/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  product: productReducer,
  basket: basketReducer,
});

export default rootReducers;

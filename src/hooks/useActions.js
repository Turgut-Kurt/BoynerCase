import {
  addToBasketAction,
  removeToBasketAction,
} from '~/modules/basket/actions';

import {bindActionCreators} from 'redux';
import {getProductAction} from '~/modules/product/actions';
import {useDispatch} from 'react-redux';
const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      getProductAction,
      addToBasketAction,
      removeToBasketAction,
    },
    dispatch,
  );
};
export default useActions;

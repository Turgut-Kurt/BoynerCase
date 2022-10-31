import {
  addToBasketAction,
  removeToBasketAction,
} from '~/modules/basket/actions';
import {
  addFavoriteAction,
  getFilterAction,
  getProductAction,
} from '~/modules/product/actions';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      getProductAction,
      addToBasketAction,
      removeToBasketAction,
      getFilterAction,
      addFavoriteAction,
    },
    dispatch,
  );
};
export default useActions;

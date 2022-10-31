import {
  addToBasketAction,
  removeToBasketAction,
} from '~/modules/basket/actions';
import {
  addFavoriteAction,
  deleteFavoriteAction,
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
      deleteFavoriteAction,
    },
    dispatch,
  );
};
export default useActions;

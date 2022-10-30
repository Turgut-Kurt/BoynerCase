import {bindActionCreators} from 'redux';
import {getProductAction} from '~/modules/product/actions';
import {useDispatch} from 'react-redux';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      getProductAction,
    },
    dispatch,
  );
};
export default useActions;

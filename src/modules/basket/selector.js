import {createSelector} from 'reselect';
export const baskets = state => state.baskets;

/**
 * basket selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const basketSelector = createSelector(
  state => state.baskets.basket,
  basket => {
    console.log('basketSelector has worked');
    return basket;
  },
);

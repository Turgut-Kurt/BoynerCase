import {createSelector} from 'reselect';
export const product = state => state.product;

/**
 * products selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const productsSelector = createSelector(
  state => state.product.products,
  products => {
    console.log('productsSelector has worked');
    return products;
  },
);

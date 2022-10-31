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

/**
 * filter data selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const filterDataSelector = createSelector(
  state => state.product.filter.FilterModules,
  FilterModules => {
    console.log('filterDataSelector has worked');
    return FilterModules;
  },
);

/**
 * sort data selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const sortDataSelector = createSelector(
  state => state.product.filter.SortModule,
  SortModule => {
    console.log('sortDataSelector has worked');
    return SortModule;
  },
);


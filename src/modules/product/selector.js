import {createSelector} from 'reselect';
export const product = state => state.product;

/**
 * products selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const productsSelector = createSelector(
  state => state.product.products,
  products => {
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
    return SortModule;
  },
);

/**
 * favorite id list selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const favoriteIdListSelector = createSelector(
  state => state.product.favoriteIdList,
  favoriteIdList => {
    return favoriteIdList;
  },
);

/**
 * favorite list selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const favoriteListSelector = createSelector(
  state => state.product.favoriteList,
  favoriteList => {
    return favoriteList;
  },
);


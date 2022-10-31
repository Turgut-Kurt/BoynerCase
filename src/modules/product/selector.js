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


/**
 * favorite id list selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const favoriteIdListSelector = createSelector(
  state => state.product.favoriteIdList,
  favoriteIdList => {
    console.log('favoriteIdListSelector has worked');
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
    console.log('favoriteList has worked');
    return favoriteList;
  },
);


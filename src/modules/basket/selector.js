import {createSelector} from 'reselect';
export const basket = state => state.basket;

/**
 * basket selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const basketItemsSelector = createSelector(
  state => state.basket.basketItems,
  basketItems => {
    console.log('basketItemsSelector has worked');
    return basketItems;
  },
);

/**
 * discount price selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const discountPriceSelector = createSelector([basket], items => {
  return items.basketItems.reduce((acc, item) => acc + item.DiscountPrice, 0);
});

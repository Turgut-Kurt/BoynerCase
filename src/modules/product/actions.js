import {createAction} from '@reduxjs/toolkit';

//get product Action
export const getProductAction = createAction('getProductAction');


//get filter Action
export const getFilterAction = createAction('getFilterAction');

//add favorite Action
export const addFavoriteAction = createAction('addFavoriteAction');

//delete favorite Action
export const deleteFavoriteAction = createAction('deleteFavoriteAction');

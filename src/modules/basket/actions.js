import {createAction} from '@reduxjs/toolkit';

//add to basket Action
export const addToBasketAction = createAction('addToBasketAction');

//remove to basket Action
export const removeToBasketAction = createAction('removeToBasketAction');


//clear basket Action
export const clearBasketAction = createAction('clearBasketAction');

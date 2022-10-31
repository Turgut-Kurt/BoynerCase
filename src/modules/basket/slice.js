import {REHYDRATE} from 'redux-persist';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  basketItems: [],
};

export const slice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let copyList = state.basketItems;
      copyList.unshift(action.payload);
      state.basketItems = copyList;
    },
    removeToBasket: (state, action) => {
      state.basketItems = state.basketItems.filter(
        (item, index) => index !== action.payload,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToBasket, removeToBasket} = slice.actions;

export default slice.reducer;

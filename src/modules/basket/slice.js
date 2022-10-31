import {REHYDRATE} from 'redux-persist';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

export const slice = createSlice({
  name: 'baskets',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let copyList = state.basket;
      copyList.unshift(action.payload);
      state.baskets = copyList;
    },
    removeToBasket: (state, action) => {
      state.baskets = state.baskets.filter(
        (item, index) => index !== action.payload,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToBasket} = slice.actions;

export default slice.reducer;

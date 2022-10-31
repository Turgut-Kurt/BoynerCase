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
    clearBasket: state => {
      state.basketItems = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(REHYDRATE, (state, action) => {
      if (action.payload && action.payload.basket) {
        // Restore only user and isLogin state
        const {basket} = action.payload;
        return {
          ...initialState,
          basketItems: basket.basketItems,
        };
      } else {
        return state;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const {addToBasket, removeToBasket, clearBasket} = slice.actions;

export default slice.reducer;

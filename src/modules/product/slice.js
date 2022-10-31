import {REHYDRATE} from 'redux-persist';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filter: {},
};

export const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.ProductList;
    },
    setFilter: (state, action) => {
      state.filter = action.payload.Context;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setProducts, setFilter} = slice.actions;

export default slice.reducer;

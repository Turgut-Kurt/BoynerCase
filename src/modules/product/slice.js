import {REHYDRATE} from 'redux-persist';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filter: {},
  favoriteList: [],
  favoriteIdList: [],
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
    addFavorite: (state, action) => {
      let copyList = state.favoriteList;
      copyList.unshift(action.payload);
      let copyIdList = state.favoriteIdList;
      copyIdList.unshift(action.payload.id);
      state.favoriteList = copyList;
      state.favoriteIdList = copyIdList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setProducts, setFilter, addFavorite} = slice.actions;

export default slice.reducer;

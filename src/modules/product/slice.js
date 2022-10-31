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
      copyIdList.unshift(action.payload.ListingId);
      state.favoriteList = [];
      state.favoriteIdList = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(REHYDRATE, (state, action) => {
      if (action.payload && action.payload.product) {
        // Restore only user and isLogin state
        const {product} = action.payload;
        return {
          ...initialState,
          favoriteList: product.favoriteList,
          favoriteIdList: product.favoriteIdList,
        };
      } else {
        return state;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const {setProducts, setFilter, addFavorite} = slice.actions;

export default slice.reducer;

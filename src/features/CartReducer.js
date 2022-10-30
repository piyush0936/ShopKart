import { createSlice } from '@reduxjs/toolkit';
import productsList from '../components/AllProductsList';

const initialCartItems = [];

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    allProducts: productsList,
    filteredProducts: [],
    cart: initialCartItems,
  },
  reducers: {
    showAllProducts: (state) => {
      return state.allProducts;
    },

    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cart[itemIndex].orderQnty < state.cart[itemIndex].quantity) {
          state.cart[itemIndex].orderQnty += 1;
        } else {
          alert('Maximum quantity added!');
        }
      } else {
        state.cart.push({
          ...action.payload,
          orderQnty: action.payload.orderQnty + 1,
        });
      }
    },

    addToCartOneItem: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        if (state.cart[itemIndex].orderQnty < state.cart[itemIndex].quantity) {
          state.cart[itemIndex].orderQnty += 1;
        } else {
          alert('Maximum quantity added!');
        }
      }
    },

    deleteProducts: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    deleteOneItem: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        if (state.cart[itemIndex].orderQnty > 1) {
          state.cart[itemIndex].orderQnty -= 1;
        } else {
          alert('Minimum one should be there!');
        }
      }
    },

    filterBySearchText: (state, action) => {
      state.filteredProducts = state.allProducts.filter((item) => {
        if (
          item.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
        ) {
          return item;
        }
      });
    },

    colorReducer: (state, action) => {
      console.log(action.payload);
      if (action.payload.red === true) {
        state.filteredProducts = state.allProducts.filter(
          (item) => item.color.toLowerCase() === 'red'
        );
      }
      // else if (action.payload.blue === true) {
      //   state.allProducts = state.allProducts.filter(
      //     (item) => item.color.toLowerCase() === 'blue'
      //   );
      // }
      else {
        return state.allProducts;
      }
    },
  },
});

export const {
  addToCart,
  addToCartOneItem,
  deleteOneItem,
  deleteProducts,
  filterBySearchText,
  showAllProducts,
  colorReducer,
} = cartSlice.actions;
export default cartSlice.reducer;

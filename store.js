import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import wishlistReducer from './slices/wishlistSlice';
import productsReducer from './slices/productsSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth : authReducer,
    wishlist: wishlistReducer,
    products: productsReducer,
  },
});
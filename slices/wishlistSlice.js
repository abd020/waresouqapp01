
import { createSlice } from '@reduxjs/toolkit';


const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState : [
    
  ],
  reducers: {
    addToWishlist: (state, action) => {     
      const productExists = state.find(item => item.id === action.payload.id);
      if (!productExists) {
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
        const productId = action.payload;
        state = state.filter(item => item.id !== productId);
      },
    clearWishlist: (state) => {
      state = [];
    },
  },
});

export const { addToWishlist,removeFromWishlist,clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

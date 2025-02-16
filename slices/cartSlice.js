
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [
      { id: 1, name: 'iPhone 1 Pro Max Natural, Black Titanium', price: '$710.71', qte: 1 },
      { id: 2, name: 'iPhone 14 Pro Max', price: '$610.50', qte: 5 },
      { id: 3, name: 'iPhone 13 Pro', price: '$510.30', qte: 1 },
  ],
  reducers: {
    addToCart: (state, action) => {
      const {id,name,price,qte } = action.payload
      const product = state.find((p)=>p.id === id)
      if(product){
        product.qte += 1
      }else{
        state.push({id,name,price,qte});
      }
      
    },
    removeFromCart: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    updateProductQuantity: (state, action) => {
      const {id,qte} = action.payload
      const product = state.find(product=>product.id === id)
      if(product){
        product.qte= qte
      }
    },
    clearCart : (state)=>{
      state = []
    }
    
  },
});

export const {
  addToCart,
  removeFromCart,
  updateProductQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

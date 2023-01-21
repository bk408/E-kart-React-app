
import productsReducer from './productSlice';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
});




export default store;
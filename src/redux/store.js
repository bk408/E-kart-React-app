
import productsReducer from './productSlice';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { getTotals } from './cartSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
});

store.dispatch(getTotals());




export default store;
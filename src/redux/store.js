
import productsReducer from './productSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});




export default store;
import { configureStore } from '@reduxjs/toolkit';
import compareItemReducer from '../features/compareItemSlice';

const store = configureStore({
  reducer: {
    compareItems: compareItemReducer,
  },
});

export default store;

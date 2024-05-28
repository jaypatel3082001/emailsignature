// store.js
import { configureStore } from '@reduxjs/toolkit';
// import inputReducer from './slice'; // Adjust path if necessary
import inputReducer from './reduxfiles/slice/Slice';
import inputReducer2 from './reduxfiles/slice/Colorslice';

const store = configureStore({
  reducer: {
    inputs: inputReducer,
    inputs2: inputReducer2,
  },
});

export default store;

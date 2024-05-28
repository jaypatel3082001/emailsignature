// store.js
import { configureStore } from '@reduxjs/toolkit';
// import inputReducer from './slice'; // Adjust path if necessary
import inputReducer from './reduxfiles/slice/Slice';
import inputReducer2 from './reduxfiles/slice/Colorslice';
import inputReducer3 from './reduxfiles/slice/Feature';

const store = configureStore({
  reducer: {
    inputs: inputReducer,
    inputs2: inputReducer2,
    inputs3: inputReducer3,
  },
});

export default store;

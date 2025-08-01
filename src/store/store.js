import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User.Slice'; // Import the user slice reducer

const store = configureStore({
  reducer: {
    user: userReducer, // Add the user slice to the store
  },
});

export default store;
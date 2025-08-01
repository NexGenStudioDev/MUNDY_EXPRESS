import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  user: null, // Stores user details (e.g., name, email, role)
  token: null, // Stores the authentication token
  isAuthenticated: false, // Tracks if the user is logged in
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Set user details and mark as authenticated
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // Set the authentication token
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // Clear user details and reset authentication state
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions for use in components
export const { setUser, setToken, clearUser } = userSlice.actions;

// Export the reducer to be added to the Redux store
export default userSlice.reducer;
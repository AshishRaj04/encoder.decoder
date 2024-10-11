import { configureStore } from "@reduxjs/toolkit";

// Placeholder reducer (can be removed later when you add real reducers)
const placeholderReducer = (state = {}) => state;

const store = configureStore({
  reducer: {
    placeholder: placeholderReducer, // Add this for now
  }
});

export default store;

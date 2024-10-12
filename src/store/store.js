import { configureStore } from "@reduxjs/toolkit";

const placeholderReducer = (state = {}) => state;

const store = configureStore({
  reducer: {
    placeholder: placeholderReducer,
  },
});

export default store;

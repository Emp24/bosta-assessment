import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combined-reducer";
import { thunk } from "redux-thunk";

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  //   devTools: process.env.NODE_ENV !== "production",
});

// Optional: subscribe to store changes
store.subscribe(() => {
  // console.log('store', process.env.NODE_ENV, store.getState());
});

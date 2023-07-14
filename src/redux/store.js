import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";

const store = configureStore({
  reducer: {
    boardsSlice: boardsSlice.reducer,
  },
});

export default store;

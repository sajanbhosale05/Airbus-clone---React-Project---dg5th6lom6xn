import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./SearchSlice";

export const store = configureStore({
    reducer: {
        search : SearchReducer,
        
    },
})
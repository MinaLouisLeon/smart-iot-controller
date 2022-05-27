import { configureStore } from "@reduxjs/toolkit";
import gridViewSlice from "./Slices/gridViewSlice";
export const store = configureStore({
    reducer : {
        gridViewSlice : gridViewSlice,
    },
    devTools : true
});
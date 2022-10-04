import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
    reducer:{
        mov: movieReducer,
        atr: authReducer,
    }
});

export default store;
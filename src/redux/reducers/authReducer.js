import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getMyLogin(state,action){
            state.isLoggedIn = true;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
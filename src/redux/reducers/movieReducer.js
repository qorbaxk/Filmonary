import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
};

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        getMainMovies(state,action){
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upComingMovies = action.payload.upComingMovies;
        }
    }
})


export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
    loading:true,

};

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        getMainMovies(state,action){
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upComingMovies = action.payload.upComingMovies;
            state.loading = action.payload.loading;
        },
        getMoviesRequest(state,action){
            state.loading = action.payload.loading;

        },
        getMoviesFailure(state,action){
            state.loading = action.payload.loading;
        }
    }
})


export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
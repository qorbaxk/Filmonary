import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: [],
  detailMovies: {},
  movieReview:{},
  movieRecommend:{},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMainMovies(state, action) {
      state.popularMovies = action.payload.popularMovies;
      state.topRatedMovies = action.payload.topRatedMovies;
      state.upComingMovies = action.payload.upComingMovies;
      state.loading = false;
      state.genreList = action.payload.genreList;
    },
    getMoviesRequest(state, action) {
      state.loading = true;
    },
    getMoviesFailure(state, action) {
      state.loading = true;
    },
    getDetailMovies(state, action) {
      state.detailMovies = action.payload.detailMovies;
      state.movieReview = action.payload.movieReview;
      state.movieRecommend = action.payload.movieRecommend;
      state.loading = false;
    },


  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;

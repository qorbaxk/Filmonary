import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

//영화 데이터 가져오기
function getMovies(keyword, page, sortResult) {
  return async (dispatch) => {
    try {
      dispatch(movieActions.getMoviesRequest());
      //동시에 api 여러개 호출하는 법
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
      );

      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      const searchMovieApi = api.get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=${page}&include_adult=false`
      );

      const sortMovieApi = api.get(
        `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortResult?sortResult:"popularity.desc"}&include_adult=true&include_video=false&page=${page}`
      )

      //3개의 데이터가 다 올때까지 기다림
      //하나하나 await 할 필요없이 이렇게 쓰면됨
      let [popularMovies, topRatedMovies, upComingMovies, genreList,searchMovies,sortMovies] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
          searchMovieApi,
          sortMovieApi
        ]);



      dispatch(
        movieActions.getMainMovies({
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
          searchMovies: searchMovies.data,
          sortMovies: sortMovies.data,
        })
      );
    } catch (error) {
      //에러핸들링
      dispatch(movieActions.getMoviesFailure());
    }
  };
}

//디테일페이지
function getMovieDetail(id) {
  return async (dispatch) => {
    try {
      dispatch(movieActions.getMoviesRequest());

      const detailMovieApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );

      const movieReviewApi = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );

      const movieRecommendApi = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );

      const trailerVideoApi = api.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );

      let [detailMovies, movieReview, movieRecommend, trailerVideo] =
        await Promise.all([
          detailMovieApi,
          movieReviewApi,
          movieRecommendApi,
          trailerVideoApi,
        ]);

     
      dispatch(
        movieActions.getDetailMovies({
          detailMovies: detailMovies.data,
          movieReview: movieReview.data,
          movieRecommend: movieRecommend.data,
          trailerVideo: trailerVideo.data,
        })
      );
    } catch (error) {
      //에러핸들링
      dispatch(movieActions.getMoviesFailure());
    }
  };
}


export const movieAction = { getMovies, getMovieDetail };

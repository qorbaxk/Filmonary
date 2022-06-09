import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch(movieActions.getMoviesRequest());
      //동시에 api 여러개 호출하는 법
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      //3개의 데이터가 다 올때까지 기다림
      //하나하나 await 할 필요없이 이렇게 쓰면됨
      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);

      console.log("인기영화", popularMovies);
      console.log("평점상위영화", topRatedMovies);
      console.log("개봉예정영화", upComingMovies);
      console.log("장르", genreList);

      dispatch(
        movieActions.getMainMovies({
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        })
      );
    } catch (error) {
      //에러핸들링
      dispatch(movieActions.getMoviesFailure());
    }
  };
}

//디테일페이지 함수
function getMovieDetail(id) {
  return async (dispatch) => {
    try {
      dispatch(movieActions.getMoviesRequest());

      const detailMovieApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );

      let [detailMovies] = await Promise.all([detailMovieApi]);

      console.log("상세영화", detailMovies);

      dispatch(
        movieActions.getDetailMovies({
          detailMovies: detailMovies.data,
        })
      );
    } catch (error) {
      //에러핸들링
      dispatch(movieActions.getMoviesFailure());
    }
  };
}

export const movieAction = { getMovies, getMovieDetail };

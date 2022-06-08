import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
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

    //3개의 데이터가 다 올때까지 기다림
    //하나하나 await 할 필요없이 이렇게 쓰면됨
    let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
      popularMovieApi,
      topRatedApi,
      upComingApi,
    ]);

    console.log(popularMovies);
    console.log(topRatedMovies);
    console.log(upComingMovies);

    dispatch(movieActions.getMainMovies({
        popularMovies:popularMovies.data,
        topRatedMovies:topRatedMovies.data,
        upComingMovies:upComingMovies.data,
    }))
  };
}

export const movieAction = { getMovies };

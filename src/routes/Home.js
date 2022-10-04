import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.mov);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  //로딩이 true면 로딩스피너를 보여주고
  //로딩이 false면 데이터를 보여준다

  //true일때는 데이터 도착 전
  //false일때는 데이터 도착 후 또는 에러났을때

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="red" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="back">
      <Banner movie={popularMovies.results[0]} />
      <div className="card-area">
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>Upcoming Movie</h1>
        <MovieSlide movies={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;

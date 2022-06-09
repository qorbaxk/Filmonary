import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import DetailBanner from "../components/DetailBanner";
import MovieExplain from "../components/MovieExplain";
import Reviews from "../components/Reviews";
import { batch } from 'react-redux'


const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
 

  const { detailMovies, loading, movieReview, movieRecommend } = useSelector((state) => state.mov);

  useEffect(() => {
    
      dispatch(movieAction.getMovieDetail(id));
    
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="red" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div>
      <DetailBanner/>
      <MovieExplain item={detailMovies}/>
      <Reviews item={movieReview} others={movieRecommend}/>
      
    </div>
  );
};

export default MovieDetail;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

const LongMovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.mov);
  const navigate = useNavigate();

  const gotoDetail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div
      className="LMC"
      onClick={gotoDetail}
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original//${item.backdrop_path}` +
          ")",
      }}
    >
      <div className="LMC-info">
        <div className="titles">
          <img
            src={`https://image.tmdb.org/t/p/original//${item.poster_path}`}
          />
          <h1>{item.title}</h1>
        </div>
        <div className="date">{moment(item.release_date).format('LL')}</div>

        {item.genre_ids?.map((id) => (
          <label className="LMC-badge">
            {genreList?.find((item) => item.id == id)?.name}
          </label>
        ))}

        <div className="explains">
            {item.overview}
        </div>

        <div className="LMC-count">
          <div >⭐ {item.vote_average}</div>
          <div>👥 {item.popularity}</div>
          <div className={item.adult ? "r-red" : "r-green"}>
            {item.adult ? "R-rated" : "G-rated"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongMovieCard;

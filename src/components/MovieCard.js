import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Home페이지에서 쓰이는 작은 영화카드

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.mov);
  const navigate = useNavigate();

  //카드 클릭시 디테일페이지로 전환
  const gotoDetail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div className="container" onClick={gotoDetail}>
      <div className="card">
        <div className="slide slide1">
          <div
            className="content"
            style={{
              backgroundImage:
                "url(" +
                `https://image.tmdb.org/t/p/original//${item.backdrop_path}` +
                ")",
            }}
          ></div>
        </div>

        <div className="slide slide2">
          <div className="content2">
            <h5>{item.title}</h5>
            {item.genre_ids?.map((id) => (
              <label>{genreList.find((item) => item.id == id)?.name}ㅤ</label>
            ))}

            <div className="star">⭐ {item.vote_average}</div>
            <div className={item.adult ? "r-red" : "r-green"}>
              {item.adult ? "R-rated" : "G-rated"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

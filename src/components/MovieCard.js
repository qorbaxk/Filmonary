import React from "react";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.mov);

  return (
    <div className="container">
      <div className="card">
        <div className="slide slide1">
          <div
            className="content"
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}` +
                ")",
            }}
          ></div>
        </div>

        <div className="slide slide2">
          <div className="content2">
            <h5>{item.title}</h5>
            {item.genre_ids.map((id) => (
              <label>{genreList.find((item) => item.id == id).name}ㅤ</label>
            ))}
           
            <div className="star">⭐ {item.vote_average}</div>
            <div className={item.adult ?"r-red":"r-green"}>{item.adult ? "R-rated" : "G-rated"}</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

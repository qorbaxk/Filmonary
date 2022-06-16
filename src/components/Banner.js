import React from "react";

//HOME 페이지 첫 화면 배너

const Banner = ({ movie }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original//${movie.backdrop_path}` +
          ")",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

//Home페이지의 카드슬라이드

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    //데스크탑 기준 4개씩 보이도록 함
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSlide = ({ movies }) => {
  return (
    <div className="card-slide">
      <Carousel responsive={responsive}>
        {movies.results.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;

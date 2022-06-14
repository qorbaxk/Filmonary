import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import LongMovieCard from "./LongMovieCard";


const SearchPage = ({searchMovies, sortMovies}) => {
  
  

  console.log("정렬된거 들어오나요?", sortMovies);

  let firstHalf = {};
  let secondHalf = {};

  if (searchMovies.results[0]?.title == "UNdefined" || sortMovies.page > 1) {
    firstHalf = sortMovies.results?.slice(0).filter((_, i) => i % 2 === 0); //짝수인덱스만 추출
    secondHalf = sortMovies.results?.slice(0).filter((_, i) => i % 2 === 1); //홀수인덱스만 추출
  }else if (searchMovies !== null) {
    firstHalf = searchMovies.results?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = searchMovies.results?.slice(0).filter((_, i) => i % 2 === 1);
  }

  

  console.log("짝수",firstHalf);
  console.log("홀수",secondHalf);
  

  return (
    <div>
      <Row>
        <Col lg={6}>
          {firstHalf?.map((item) => (
            <LongMovieCard item={item} />
          ))}
        </Col>
        <Col lg={6}>
          {secondHalf?.map((item) => (
            <LongMovieCard item={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default SearchPage;

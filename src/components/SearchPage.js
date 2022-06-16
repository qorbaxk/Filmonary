import React from "react";
import { Row, Col } from "react-bootstrap";
import LongMovieCard from "./LongMovieCard";
import moment from "moment";

//Movies 페이지의 무비카드 보여주는 방식

const SearchPage = ({
  searchMovies,
  sortMovies,
  minValue,
  maxValue,
  genreName,
  genreList,
  keyword,
}) => {
  let firstHalf = {};
  let secondHalf = {};

  //년도 필터
  const sortedYear = sortMovies.results
    .slice(0)
    .filter(
      (element) =>
        minValue <= moment(element.release_date).format("YYYY") &&
        maxValue >= moment(element.release_date).format("YYYY")
    );

  //장르 필터
  const sameGenreId = genreList?.find((item) => item.name == genreName)?.id;
  const sortedGenre = sortMovies.results
    .slice(0)
    .filter((element) => element.genre_ids.includes(sameGenreId));

  //년도, 장르 교집합
  const movieFiltered = sortedYear
    ?.slice(0)
    .filter((it) => sortedGenre?.includes(it));

  //어떤것을 페이지화할지

  if (searchMovies.results[0]?.title == "UNdefined") {
    //제일 처음 보여지는 부분
    firstHalf = sortMovies.results?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = sortMovies.results?.slice(0).filter((_, i) => i % 2 === 1);
  } else if (searchMovies.results !== null || keyword !== null) {
    //검색했을 때
    firstHalf = searchMovies.results?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = searchMovies.results?.slice(0).filter((_, i) => i % 2 === 1);
  }

  //년도 필터링 했을 때
  if (minValue !== 1990 || maxValue !== 2022) {
    if (minValue >= 1990) {
      firstHalf = sortedYear?.slice(0).filter((_, i) => i % 2 === 0);
      secondHalf = sortedYear?.slice(0).filter((_, i) => i % 2 === 1);
    }
  }

  //장르 필터링 했을 때
  if (sameGenreId) {
    firstHalf = sortedGenre?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = sortedGenre?.slice(0).filter((_, i) => i % 2 === 1);
  }

  //년도,장르 모두 필터링 했을 때
  if (sortedYear && sameGenreId) {
    if (movieFiltered) {
      firstHalf = movieFiltered?.slice(0).filter((_, i) => i % 2 === 0);
      secondHalf = movieFiltered?.slice(0).filter((_, i) => i % 2 === 1);
    }
  }

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

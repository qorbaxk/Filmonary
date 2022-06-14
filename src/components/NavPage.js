import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import LongMovieCard from "../components/LongMovieCard";
import { movieAction } from "../redux/actions/movieAction";
import Pagination from "react-js-pagination";

const NavPage = ({ popularMovies, searchMovies }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  let half_length = 0;
  let firstHalf = {};
  let secondHalf = {};

  if(searchMovies.results[0].title == "UNdefined"){
    half_length = Math.ceil(popularMovies.results?.length / 2);
    firstHalf = popularMovies.results?.slice(0).splice(0, half_length);
    secondHalf = popularMovies.results?.slice(0).splice(half_length);
  }else if (searchMovies !== null) {
    half_length = Math.ceil(searchMovies.results?.length / 2);
    firstHalf = searchMovies.results?.slice(0).splice(0, half_length);
    secondHalf = searchMovies.results?.slice(0).splice(half_length);
  }

  //페이지네이션
  const handlePageChange = (page) => {
    setPage(page);
    console.log("내가 찍은 페이지", page);
    dispatch(movieAction.getMovies(undefined, page));
  };

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
        <Pagination
          activePage={page}
          hideDisabled={true}
          itemsCountPerPage={20}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </Row>
    </div>
  );
};

export default NavPage;

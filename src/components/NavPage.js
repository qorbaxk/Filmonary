import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import LongMovieCard from "../components/LongMovieCard";
import { movieAction } from "../redux/actions/movieAction";
import Pagination from "react-js-pagination";

const NavPage = ({ popularMovies, searchMovies }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  let firstHalf = {};
  let secondHalf = {};

  if(searchMovies.results[0].title == "UNdefined"){
    firstHalf = popularMovies.results?.slice(0).filter((_,i)=>i%2===0); //짝수인덱스만 추출
    secondHalf = popularMovies.results?.slice(0).filter((_,i)=>i%2===1); //홀수인덱스만 추출
  }else if (searchMovies !== null) {
    firstHalf = searchMovies.results?.slice(0).filter((_,i)=>i%2===0);
    secondHalf = searchMovies.results?.slice(0).filter((_,i)=>i%2===1);
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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-js-pagination";
import LongMovieCard from "../components/LongMovieCard";
import { movieAction } from "../redux/actions/movieAction";

const NavPage = () => {

  const { popularMovies } = useSelector((state) => state.mov);

  let half_length = Math.ceil(popularMovies.results?.length / 2);

  let firstHalf = popularMovies.results?.slice(0).splice(0, half_length);
  let secondHalf = popularMovies.results?.slice(0).splice(half_length);

  console.log(firstHalf);
  console.log(secondHalf);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setPage(pageNumber);
    dispatch(movieAction.getMovies(pageNumber));
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
      </Row>
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={popularMovies.total_pages}
        pageRangeDisplayed={5}
        onChange={handlePageChange.bind(this)}
      />
    </div>
  );
};

export default NavPage;

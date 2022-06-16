import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

//디테일 페이지의 추천영화 보여주기

const Recommends = ({ item }) => {
  let firstHalf = item.results?.slice(0).filter((_, i) => i % 2 === 0);
  let secondHalf = item.results?.slice(0).filter((_, i) => i % 2 === 1);

  return (
    <Container className="recommend-area">
      <div className="under-area">
        <Row>
          <Col className="line">
            {firstHalf?.map((item) => (
              <div className="re-card-area">
                <MovieCard item={item} />
              </div>
            ))}
          </Col>
          <Col>
            {secondHalf?.map((item) => (
              <div className="re-card-area">
                <MovieCard item={item} />
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Recommends;

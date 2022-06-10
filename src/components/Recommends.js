import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const Recommends = ({ item }) => {
  let half_length = Math.ceil(item.results?.length / 2);

  let firstHalf = item.results?.slice(0).splice(0, half_length);
  let secondHalf = item.results?.slice(0).splice(-half_length);

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

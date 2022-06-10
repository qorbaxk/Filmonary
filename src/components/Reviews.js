import React from "react";
import { Container } from "react-bootstrap";
import moment from "moment";
import MovieCard from "./MovieCard";

const Reviews = ({ item }) => {
  //리뷰 역순으로
  let arr = item.results?.slice(0).reverse();

  return (
    <Container>
      <div className="under-area">
        {arr?.map((item) => (
          <div className="reviews">
            <h4>{item.author}</h4>
            <div>{item.content}</div>
            <p>{moment(item.created_at).format("LLL")}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Reviews;

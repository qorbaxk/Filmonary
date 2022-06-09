import React from "react";
import { Container } from "react-bootstrap";
import moment from "moment";
import MovieCard from "./MovieCard";

const Reviews = ({ item, others }) => {
  //리뷰 역순으로
  let arr = item.results?.slice(0).reverse();

  return (
    <Container>
      <div className="rv-btn">
        <button>{`REVIEWS (${item.results?.length})`}</button>
        <button>{`RELATED MOVIES`}</button>
      </div>

      <div className="review-area">
        {arr?.map((item) => (
          <div className="reviews">
            <h4>{item.author}</h4>
            <div>{item.content}</div>
            <p>{moment(item.created_at).format("LLL")}</p>
          </div>
        ))}
      </div>

      <div className="recommend-area">
         
      </div>
    </Container>
  );
};

export default Reviews;

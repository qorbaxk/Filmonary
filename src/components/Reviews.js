import React from "react";
import { Container } from "react-bootstrap";
import moment from "moment";

//디테일페이지의 리뷰보여주기

const Reviews = ({ item }) => {
  //리뷰 역순으로(최근작성순으로 위에서부터 보여줌)
  let arr = item.results?.slice(0).reverse();
  

  return (
    <Container>
      <div className="under-area">
        {arr?.map((item) => (
          <div key={item.id} className="reviews">
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

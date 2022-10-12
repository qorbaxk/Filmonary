import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HeartBtn = () => {
  //true 면 찜한영화 false면 찜하지 않은 영화
  const [heart, setHeart] = useState(false);

  const putMyList = () => {
    setHeart((prev) => !prev);
  };

  return (
    <div className="heartbtn-area" onClick={putMyList}>
      {heart ? (
        <FontAwesomeIcon icon={faCheck} size="2x" color="red" />
      ) : (
        <FontAwesomeIcon icon={faPlus} size="2x" />
      )}

      <label>My List</label>
    </div>
  );
};

export default HeartBtn;

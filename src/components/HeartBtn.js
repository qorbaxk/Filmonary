import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { dbService } from "fBase";
import { getAuth } from "firebase/auth";
import { async } from "@firebase/util";

const HeartBtn = ({ item }) => {
  //true 면 찜한영화 false면 찜하지 않은 영화
  const [heart, setHeart] = useState(false);
  const listObj = item;
  const auth = getAuth();

  const putMyList = async () => {
    await setDoc(doc(dbService, auth.currentUser.uid, listObj.title), listObj);
  };

  const deleteMyList = async () => {
    await deleteDoc(doc(dbService, auth.currentUser.uid, listObj.title));
  };

  useEffect(() => {
    if (heart) {
      putMyList(); //찜했을 때
    } else {
      deleteMyList(); //찜에서 제거
    }
  }, [heart]);

  return (
    <div className="heartbtn-area" onClick={() => setHeart((prev) => !prev)}>
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

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  DocumentSnapshot,
  setDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { dbService } from "fBase";
import { getAuth } from "firebase/auth";

const HeartBtn = ({ item }) => {
  //true 면 찜하지 않은 영화 false면 찜한영화
  const [heart, setHeart] = useState(null);
  const listObj = item;
  const auth = getAuth();

  //찜 추가
  const putMyList = async () => {
    await setDoc(doc(dbService, auth.currentUser.uid, listObj.title), listObj);
  };

  //찜 삭제
  const deleteMyList = async () => {
    await deleteDoc(doc(dbService, auth.currentUser.uid, listObj.title));
  };

  //찜 확인
  const existMyList = async () => {
    const userRef = doc(dbService, auth.currentUser.uid, listObj.title);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) { 
      setHeart(true);
    } else {
      setHeart(false);
    }
  };

  //찜 클릭시
  const onClick = () => {
    setHeart((prev) => !prev);

    if (heart) {
      deleteMyList(); //찜에서 제거
    } else {
      putMyList(); //찜했을 때
    }
  };

  useEffect(() => {
    existMyList();
  }, []);

  return (
    <div className="heartbtn-area" onClick={onClick}>
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

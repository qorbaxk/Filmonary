import React from "react";
import LogOut from "components/LogOut";
import EditProfile from "components/EditProfile";
import { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "fBase";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import LongMovieCard from "components/LongMovieCard";
import { Container, Row, Col } from "react-bootstrap";

const Profile = ({ userObj, refreshUser }) => {
  const auth = getAuth();
  const [myLists, setMyLists] = useState([]);

  useEffect(() => {
    const q = query(collection(dbService, auth.currentUser.uid));
    onSnapshot(q, (snapshot) => {
      const myListArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMyLists(myListArr);
    });
  }, []);

  return (
    <div className="profileArea">
      <div className="profileImage">
        <img src={userObj.photoURL} alt="Avatar" className="avatar" />
      </div>
      <label className="profileName">{userObj.displayName}</label>
      <div className="EditBtns">
        <EditProfile userObj={userObj} refreshUser={refreshUser} />
        <LogOut />
      </div>
      <div className="profileList">
        <h2>My List</h2>
        <Container className="mycardList">
          <Row>
            {myLists.map((list) => (
              <Col lg={3}>
                <LongMovieCard key={list.id} item={list} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Profile;

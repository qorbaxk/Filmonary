import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const EditProfile = ({ userObj }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [introduce, setIntroduce] = useState("");

  return (
    <>
      <button onClick={() => setModalIsOpen(true)} className="EditBtn">
        Edit
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
      >
        <Container>
          <Row>
            <h3>Edit your Profile</h3>
            <Col lg={2} sm={6}>
              <div className="editImg-area">
                <label htmlFor="file-input" className="editImg">
                  <img
                    src={userObj.photoURL}
                    alt="Avatar"
                    className="avatar2"
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="caicon"
                    size="x"
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
            </Col>
            <Col lg={10} sm={6} className="editText-area">
              <label>Your name</label>
              <input
                type="text"
                autoFocus
                placeholder="name"
                onChange={(e) => setNewDisplayName(e.target.value)}
                value={newDisplayName}
                className="editInput"
              />
              <label>About you</label>
              <input
                type="text"
                autoFocus
                placeholder="Hello!"
                onChange={(e) => setIntroduce(e.target.value)}
                value={introduce}
                className="editInput"
              />
            </Col>
            <div className="editBtns">
              <button className="saveBtn">Save</button>
              <button className="cancelBtn" onClick={() => setModalIsOpen(false)}>Cancel</button>
            </div>
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default EditProfile;

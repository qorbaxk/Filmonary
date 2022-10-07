import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { authService, storageService } from "fBase";
import { updateProfile } from "firebase/auth";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 } from "uuid";

const EditProfile = ({ userObj, refreshUser }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [introduce, setIntroduce] = useState("");
  const [newProfilePhoto, setNewProfilePhoto] = useState(userObj.photoURL);

  //프로필 수정
  const onSubmit = async (e) => {
    e.preventDefault();
    let profilePhotoUrl = "";

    //닉네임 변경됐을 때
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(authService.currentUser, {
        displayName: newDisplayName,
      });
      refreshUser();
    }

    //사진 변경됐을 때
    if (userObj.photoURL !== newProfilePhoto) {
      const profilePhotoRef = ref(storageService, `${userObj.uid}/${v4()}`);
      const response = await uploadString(
        profilePhotoRef,
        newProfilePhoto,
        "data_url"
      );
      profilePhotoUrl = await getDownloadURL(response.ref);

      await updateProfile(authService.currentUser, {
        photoURL: profilePhotoUrl,
      });
      refreshUser();
      setModalIsOpen(false);
    }
  };

  //사진 업로드
  const onUploadPhoto = (e) => {
    const {
      target: { files },
    } = e;
    const theProfile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setNewProfilePhoto(result);
    };
    reader.readAsDataURL(theProfile);
  };

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
        <form onSubmit={onSubmit}>
          <Container>
            <Row>
              <h3>Edit your Profile</h3>
              <Col lg={2} sm={6}>
                <div className="editImg-area">
                  <label htmlFor="file-input" className="editImg">
                    <img
                      src={newProfilePhoto}
                      alt="Avatar"
                      className="avatar2"
                    />
                    <FontAwesomeIcon icon={faCamera} className="caicon" />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                    onChange={onUploadPhoto}
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
                <label>About you {`(${introduce.length}/60)`}</label>
                <input
                  type="text"
                  autoFocus
                  placeholder="Hello!"
                  onChange={(e) => setIntroduce(e.target.value)}
                  value={introduce}
                  className="editInput"
                  maxLength={60}
                />
              </Col>
              <div className="editBtns">
                <button type="submit" className="saveBtn">
                  Save
                </button>
                <button
                  className="cancelBtn"
                  onClick={() => setModalIsOpen(false)}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </Row>
          </Container>
        </form>
      </Modal>
    </>
  );
};

export default EditProfile;

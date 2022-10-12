import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { authService, storageService, dbService } from "fBase";
import { updateProfile } from "firebase/auth";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 } from "uuid";

const EditProfile = ({ userObj, refreshUser }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [newProfilePhoto, setNewProfilePhoto] = useState(userObj.photoURL);

  //프로필 수정
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
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
      }

      setModalIsOpen(false);
    } catch (error) {
      console.error("Error adding document:", error);
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
          <h3>Edit your Profile</h3>

          <div className="editImg-area">
            <label htmlFor="file-input" className="editImg">
              <img src={newProfilePhoto} alt="Avatar" className="avatar2" />
              <FontAwesomeIcon icon={faCamera} className="caicon" />
            </label>
            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              onChange={onUploadPhoto}
            />
          </div>
          <div className="editText-area">
            <label>name</label>
            <input
              type="text"
              autoFocus
              onChange={(e) => setNewDisplayName(e.target.value)}
              value={newDisplayName}
              className="editInput"
            />
          </div>
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
        </form>
      </Modal>
    </>
  );
};

export default EditProfile;

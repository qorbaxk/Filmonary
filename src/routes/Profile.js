import React from "react";
import LogOut from "components/LogOut";
import EditProfile from "components/EditProfile";


const Profile = ({ userObj, refreshUser }) => {

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
        
      </div>
    </div>
  );
};

export default Profile;

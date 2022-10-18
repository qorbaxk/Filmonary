import { authService } from "fBase";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };

  return (
    <button className="EditBtn" onClick={onLogOutClick}>
      Logout
    </button>
  );
};

export default LogOut;

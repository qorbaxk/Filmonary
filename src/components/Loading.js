import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="spinner">
      <ClipLoader color="red" size={150} />
    </div>
  );
};

export default Loading;

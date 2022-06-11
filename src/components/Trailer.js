import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import YouTube from "react-youtube";

const Trailer = ({ item }) => {
  const [show, setShow] = useState(false);
 

  const trailer = item.results?.find((item)=>{
    if(item.name === 'Official Trailer'){
      return item
    }
  })

  const trailer2 = item.results?.find((item)=>{
    if(item.type === 'Trailer'){
      return item
    }
  })

  console.log(trailer?.key)
  console.log(trailer2?.key)



  

  

  const opts = {
    height: "600",
    width: "1160",
    playerVars: {
      autoplay: 0,
      
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <Button id="tr-btn" variant="primary" onClick={() => setShow(true)}>
        🍿 Watch Trailer
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <YouTube videoId={trailer?.key == undefined? trailer2?.key : trailer?.key} opts={opts} onReady={_onReady} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Trailer;

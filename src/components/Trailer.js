import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import YouTube from "react-youtube";

const Trailer = ({ videoId }) => {
  const [show, setShow] = useState(false);
  
  const [trailer, setTrailer] = useState('');



  const findTrailer = () =>{
    if(videoId.includes(videoId.name == 'Official Trailer')){
      setTrailer(videoId.find(videoId.name === 'Official Trailer').key)
    }else{
      setTrailer(videoId[videoId.length-1].key)
    }
    
  }

  useEffect(()=>{
    findTrailer()
  },[])
  

 


  const opts = {
    height: "600",
    width: "1160",
    playerVars: {
      autoplay: 1,
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
          <YouTube
            videoId={
              trailer
            }
            opts={opts}
            onReady={_onReady}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Trailer;

import React,{useState} from "react";
import { Modal, Button } from "react-bootstrap";
import YouTube from 'react-youtube';



const Trailer = () => {
  const [show, setShow] = useState(false);
 

  const opts = {
    height: '600',
    width: '1160',
    playerVars: {
     
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    
    event.target.pauseVideo();
  }


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
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Trailer;

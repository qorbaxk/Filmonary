import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const DetailBanner = () => {
  return (
    <div>
        <div className="db1-area">
        <img
          className="db1"
          src="https://blog.kakaocdn.net/dn/dXwEao/btq1C2XPrpC/jukdVsrRqCMQaxDlQuH8G0/img.png"
        />
        <div className="db2-area">
          <img
            className="db2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          />

          <div className="db2-ex">Search movies anytime, anywhere</div>
          <div className="db2-input">
            <input type="text" placeholder="TITLE" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailBanner
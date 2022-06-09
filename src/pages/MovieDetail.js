import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { detailMovies, loading } = useSelector((state) => state.mov);

  useEffect(async () => {
    dispatch(movieAction.getMovieDetail(id));
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="red" loading={loading} size={150} />
      </div>
    );
  }
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
      <Container id="detail-area">
        <Row>
          <Col>
            <img
              className="detail-img"
              src={`https://image.tmdb.org/t/p/original//${detailMovies.poster_path}`}
            />
          </Col>
          <Col>
            {detailMovies.genres.map((item) => (
              <label className="badge">{item.name}</label>
            ))}
            <h1>{detailMovies.title}</h1>
            <p>{detailMovies.tagline}</p>
            <div>
              <span>⭐ {detailMovies.vote_average}</span>
              <span>👥 {detailMovies.popularity}</span>
              <span className={detailMovies.adult ? "r-red" : "r-green"}>
                {detailMovies.adult ? "🔺 R-rated" : "✔️ G-rated"}
              </span>
            </div>
            <div className="da-ex">{detailMovies.overview}</div>
            <div className="badge-ex">
              <div>
                <label className="badge">Budget</label>
                <span>$ {detailMovies.budget}</span>
              </div>
              <div>
                <label className="badge">Revenue</label>
                <span>$ {detailMovies.revenue}</span>
              </div>
              <div>
                <label className="badge">Release Day</label>
                <span>{detailMovies.release_date}</span>
              </div>
              <div>
                <label className="badge">Time</label>
                <span>
                  {Math.floor(detailMovies.runtime / 60)}h {detailMovies.runtime % 60}m
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;

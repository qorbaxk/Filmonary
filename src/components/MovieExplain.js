import React from 'react'
import { Container, Row, Col } from "react-bootstrap";


const MovieExplain = ({item}) => {

  

  return (
    <div>
        <Container id="detail-area">
        <Row>
          <Col>
            <img
              className="detail-img"
              src={`https://image.tmdb.org/t/p/original//${item.poster_path}`}
            />
          </Col>
          <Col>
          {item.genres?.map((item) => (
              <label className="badge">{item.name}</label>
            ))}
            <h1>{item.title}</h1>
            <p>{item.tagline}</p>
            <div>
              <span>⭐ {item.vote_average}</span>
              <span>👥 {item.popularity}</span>
              <span className={item.adult ? "r-red" : "r-green"}>
                {item.adult ? "🔺 R-rated" : "✔️ G-rated"}
              </span>
            </div>
            <div className="da-ex">{item.overview}</div>
            <div className="badge-ex">
              <div>
                <label className="badge">Budget</label>
                <span>$ {item.budget}</span>
              </div>
              <div>
                <label className="badge">Revenue</label>
                <span>$ {item.revenue}</span>
              </div>
              <div>
                <label className="badge">Release Day</label>
                <span>{item.release_date}</span>
              </div>
              <div>
                <label className="badge">Time</label>
                <span>
                  {Math.floor(item.runtime / 60)}h {item.runtime % 60}m
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieExplain
import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import LongMovieCard from "../components/LongMovieCard";
import Slider from "../components/Slider";
import ClipLoader from "react-spinners/ClipLoader";

const Movies = () => {
  const dispatch = useDispatch();
  const { popularMovies, loading, genreList } = useSelector((state) => state.mov);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  let half_length = Math.ceil(popularMovies.results?.length / 2);

  let firstHalf = popularMovies.results?.slice(0).splice(0, half_length);
  let secondHalf = popularMovies.results?.slice(0).splice(half_length);

  console.log(firstHalf);
  console.log(secondHalf);
  console.log("장르",genreList);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="red" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div className="back sorted">
      <Container>
        <Row>
          <Col lg={4}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sort</Accordion.Header>
                <Accordion.Body>
                  <div>Sort Results By</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      ?
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>None</Dropdown.Item>
                      <Dropdown.Item>Popularity⬇</Dropdown.Item>
                      <Dropdown.Item>Popularity⬆</Dropdown.Item>
                      <Dropdown.Item>Release Day⬇</Dropdown.Item>
                      <Dropdown.Item>Release Day⬆</Dropdown.Item>
                      <Dropdown.Item>Vote⬇</Dropdown.Item>
                      <Dropdown.Item>Vote⬆</Dropdown.Item>
                      <Dropdown.Item>Revenue⬇</Dropdown.Item>
                      <Dropdown.Item>Revenue⬆</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Filter</Accordion.Header>
                <Accordion.Body>
                  <div className="filters">
                    <h4>Year Filter</h4>
                    <Slider min={1990} max={2022} />
                  </div>
                  <div className="filters">
                    <h4>Star Rating Filter</h4>
                    <Slider min={0} max={10} />
                  </div>
                  <div>
                    <h4>Generes</h4>
                    {genreList?.map((item)=>(
                      <button className="genre-btn color-6">
                        {item.name}
                      </button>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={6}>
                {firstHalf?.map((item) => (
                  <LongMovieCard item={item} />
                ))}
              </Col>
              <Col lg={6}>
                {secondHalf?.map((item) => (
                  <LongMovieCard item={item} />
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;

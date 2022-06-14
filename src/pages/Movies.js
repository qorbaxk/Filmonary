import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import Slider from "../components/Slider";
import ClipLoader from "react-spinners/ClipLoader";
import NavPage from "../components/NavPage";

const Movies = () => {

  const dispatch = useDispatch();
  const { loading, genreList, searchMovies, popularMovies } = useSelector(
    (state) => state.mov
  );

  console.log("검색됐나요?",searchMovies);
  console.log("장르", genreList);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

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
                    <h4>Years</h4>
                    <Slider min={1990} max={2022} />
                  </div>
                  <div className="filters">
                    <h4>Star Rating</h4>
                    <Slider min={0} max={10} />
                  </div>
                  <div>
                    <h4>Generes</h4>
                    {genreList?.map((item) => (
                      <button className="genre-btn color-6">{item.name}</button>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={8}>
            <NavPage popularMovies={popularMovies} searchMovies={searchMovies} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;

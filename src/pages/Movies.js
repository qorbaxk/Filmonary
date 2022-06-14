import React, { useEffect, useState } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Slider from "../components/Slider";
import ClipLoader from "react-spinners/ClipLoader";
import FilterSort from "../components/FilterSort";
import SearchPage from "../components/SearchPage";
import Pagination from "react-js-pagination";
import Dropdown from "react-bootstrap/Dropdown";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [sortTitle, setSortTitle] = useState("");

  const dispatch = useDispatch();
  const { loading, genreList, searchMovies, sortMovies } = useSelector(
    (state) => state.mov
  );

  useEffect(() => {
    dispatch(movieAction.getMovies(undefined, page, sortTitle));
  }, [page,sortTitle]);

  //페이지네이션
  const handlePageChange = (page) => {
    setPage(page);
    console.log("내가 찍은 페이지", page);
    
  };

  //소트
  const handleSelect = (eventKey) => {
    console.log("선택했다", eventKey);
    setSortTitle(eventKey);
    setPage(1);
  };

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="red" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div className="back">
      <Container>
        <Row>
          <Col lg={4}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sort</Accordion.Header>
                <Accordion.Body>
                  <div>Sort Results By</div>
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      {sortTitle}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="popularity.desc">
                        None
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="popularity.desc">
                        Popularity(Desc)
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="popularity.asc">
                        Popularity(Asc)
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="release_date.desc">
                        Release Day(Desc)
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="release_date.asc">
                        Release Day(Asc)
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="vote_average.desc">
                        Vote(Desc)
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="vote_average.asc">
                        Vote(Asc)
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="revenue.desc">
                        Revenue(Desc)
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="revenue.asc">
                        Revenue(Asc)
                      </Dropdown.Item>
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
            <SearchPage searchMovies={searchMovies} sortMovies={sortMovies} />
          </Col>
        </Row>
        <Pagination
          activePage={page}
          hideDisabled={true}
          itemsCountPerPage={20}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </Container>
    </div>
  );
};

export default Movies;

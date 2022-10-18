import React, { useEffect, useState } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Slider from "../components/Slider";
import ClipLoader from "react-spinners/ClipLoader";
import SearchPage from "../components/SearchPage";
import Pagination from "react-js-pagination";
import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchBtn from "components/SearchBtn";

const Movies = () => {
  const [query, setQuery] = useSearchParams();
  let keyword = query.get("query");
  const [page, setPage] = useState(1);
  const [sortTitle, setSortTitle] = useState("");
  const [genreName, setGenreName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, genreList, searchMovies, sortMovies, minValue, maxValue } =
    useSelector((state) => state.mov);

  useEffect(() => {
    dispatch(movieAction.getMovies(undefined, page, sortTitle));
    window.scrollTo(0, 0);
  }, [page, sortTitle]);

  //페이지네이션
  const handlePageChange = (page) => {
    setPage(page);
  };

  //정렬선택
  const handleSelect = (eventKey) => {
    setSortTitle(eventKey);
    setPage(1);
    navigate(`/movies`);
  };

  //장르선택
  const handleGenre = (e) => {
    setGenreName(e.target.value);
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
            <SearchBtn />
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
                        Popularity.desc
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="popularity.asc">
                        Popularity.asc
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="release_date.desc">
                        Release Day.desc
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="release_date.asc">
                        Release Day.asc
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="vote_average.desc">
                        Vote.desc
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="vote_average.asc">
                        Vote.asc
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="revenue.desc">
                        Revenue.desc
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="revenue.asc">
                        Revenue.asc
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
                  <div>
                    <h4>Generes</h4>
                    {genreList?.map((item) => (
                      <button
                        key={item.id}
                        onClick={handleGenre}
                        value={item.name}
                        className="genre-btn color-6"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={8}>
            <SearchPage
              searchMovies={searchMovies}
              sortMovies={sortMovies}
              minValue={minValue}
              maxValue={maxValue}
              genreName={genreName}
              genreList={genreList}
              keyword={keyword}
            />
          </Col>

          <div className="page-align">
            {keyword ? null : (
              <Pagination
                activePage={page}
                hideDisabled={true}
                itemsCountPerPage={20}
                totalItemsCount={10000}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;

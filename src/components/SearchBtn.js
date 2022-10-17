import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBtn = () => {
  const [keyword, setKeyword] = useState(null);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //검색
  const gotoSearch = (event) => {
    event.preventDefault();

    if (keyword) {
      //검색어 있을 때
      navigate(`/movies?query=${keyword}`);
      dispatch(movieAction.getMovies(keyword, 1));
    } else {
      //검색어 없을 때
      navigate(`/movies`);
      dispatch(movieAction.getMovies(null, 1));
    }
  };

  return (
    <div>
      <Form className="d-flex search-area" onSubmit={gotoSearch}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 search-input"
          aria-label="Search"
          value={text}
          onChange={(e) => {
            setKeyword(e.target.value);
            setText(e.target.value);
          }}
        />
        <Button type="submit" className="search-btn">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </Button>
      </Form>
    </div>
  );
};

export default SearchBtn;

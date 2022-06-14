import React, { useState } from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const Navigation = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gotoSearch = (event) => {
    event.preventDefault();
    if(keyword==""){
      console.log("검색어 없음");
      dispatch(movieAction.getMovies(undefined,1))
      navigate(`/movies`);
    }else{
      dispatch(movieAction.getMovies(keyword,1));
      navigate(`/movies?query=${keyword}`);
    }
    
  };

  return (
    <Navbar id="navbar" bg="black" varient="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            width={120}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/movies" className="nav-item">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={gotoSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 search-area"
              aria-label="Search"
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button type="submit">s</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

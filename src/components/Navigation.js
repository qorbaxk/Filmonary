import React from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar id="navbar" bg="black" varient="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img width={120} src="./img/logo2.png" />
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
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>s</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

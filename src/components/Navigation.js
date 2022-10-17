import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// 맨위에 있는 메뉴

const Navigation = ({ isLoggedIn }) => {
  return (
    <Navbar id="navbar" bg="black" varient="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            width={120}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          />
        </Navbar.Brand>
        {isLoggedIn && (
          <>
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
                <Link to="/profile" className="nav-item">
                  My Page
                </Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;

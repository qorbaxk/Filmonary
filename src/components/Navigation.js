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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action3">My Favorite</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
               s
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

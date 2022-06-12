import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import Slider from "../components/Slider";

const Movies = () => {


  const value = {min:1990, max:2022};

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
                  <div>
                    <h1>Year Filter</h1>
                    <Slider/>
                  </div>
                  <div>IBM Score Filter</div>
                  <div>Generes</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={8}>우짤</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;

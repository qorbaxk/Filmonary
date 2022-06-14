import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const FilterSort = ({item}) => {
  const [sortTitle, setSortTitle] = useState("?");

  const handleSelect = (eventKey) => {
    console.log("선택했다", eventKey);
    setSortTitle(eventKey);
  };

  return (
    <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {sortTitle}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="None">None</Dropdown.Item>
          <Dropdown.Item eventKey="Popularity(Desc)">
            Popularity(Desc)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Popularity(Asc)">
            Popularity(Asc)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Release Day(Desc)">
            Release Day(Desc)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Release Day(Asc)">
            Release Day(Asc)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Vote(Desc)">Vote(Desc)</Dropdown.Item>
          <Dropdown.Item eventKey="Vote(Asc)">Vote(Asc)</Dropdown.Item>
          <Dropdown.Item eventKey="Revenue(Desc)">Revenue(Desc)</Dropdown.Item>
          <Dropdown.Item eventKey="Revenue(Asc)">Revenue(Asc)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FilterSort;

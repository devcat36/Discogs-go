import React from "react";
import { Header, Menu } from "semantic-ui-react";
import SelectedFilterElement from "./SelectedFilterElement";

function SelectedFilterGroup({ filters, onFilterClick }) {
  console.log(filters);
  return (
    <Menu vertical fluid>
      <Menu.Item active>
        <Header as={"h4"}>You Selected:</Header>
      </Menu.Item>
      {filters.map((filter) => (
        <SelectedFilterElement
          onFilterClick={onFilterClick}
          category={filter.category}
          text={filter.text}
        />
      ))}
    </Menu>
  );
}

export default SelectedFilterGroup;

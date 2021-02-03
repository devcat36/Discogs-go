import React from "react";
import { Menu, Icon } from "semantic-ui-react";

function FilterSelectedElement({ category, text, onFilterClick }) {
  return (
    <Menu.Item onClick={() => onFilterClick({ category })}>
      {category}:&nbsp;&nbsp;
      {text}
      <Icon name={"x"} />
    </Menu.Item>
  );
}

export default FilterSelectedElement;

import React from "react";
import {Label, Menu, Icon} from "semantic-ui-react";

function FilterSelectedElement(props) {
  return(
    <Menu.Item onClick={props.onClick}>
      {props.category}:&nbsp;&nbsp;
      {props.name}
      <Icon name={'x'}/>
    </Menu.Item>
  );
}

export default FilterSelectedElement;
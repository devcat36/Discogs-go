import React from "react";
import { Menu, Label } from "semantic-ui-react";
import {abbreviateNumber} from "../constants";

function FilterElement({
  value,
  text,
  count,
  onFilterClick
}) {
  return(
    <Menu.Item onClick={()=>onFilterClick(value)}>
        {text}
        {count && <Label style={{ width: "3rem" }}>{abbreviateNumber(count)}</Label>}
    </Menu.Item>
  );
}

export default FilterElement;

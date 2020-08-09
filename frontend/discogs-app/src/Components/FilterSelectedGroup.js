import React, {useCallback} from "react";
import {Header, List, Menu} from "semantic-ui-react";
import FilterSelectedElement from "./FilterSelectedElement";

function FilterSelectedGroup(props) {
  if (props.selected_filters.length === 0) return (<></>);
  return (
    <Menu vertical fluid>
      <Menu.Item active><Header as={'h4'}>You Selected:</Header></Menu.Item>
      {props.selected_filters.map(item => {
        return <FilterSelectedElement onClick={()=>props.onFilterRemove(item)} category={item.category} name={item.name}/>
      })}
    </Menu>
  );
}

export default FilterSelectedGroup;
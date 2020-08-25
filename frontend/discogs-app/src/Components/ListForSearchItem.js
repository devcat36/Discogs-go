import React from "react";
import {Item} from "semantic-ui-react";

function ListForSearchItem({item, onClick}) {
  return (
    <Item onClick={onClick} style={{cursor:'pointer'}}>
      <Item.Image size="tiny" src={item.imgsrc} style={{width:'55px', height:'55px'}}/>
      <Item.Content>
        {item.artist} - {item.title}
        <Item.Meta>
          {item.labels.map(label => label + ', ')}<br/>
          {item.format}, {item.formatDescription},
          {item.year}, {item.country}
        </Item.Meta>
      </Item.Content>
    </Item>
  )
}

export default ListForSearchItem
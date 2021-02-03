import React from "react";
import {Item, Image} from "semantic-ui-react";

function ListForSaleSearchItem({item, onClick}) {
  return (
    <Item onClick={onClick} style={{cursor:'pointer'}}>
      <img src={item.imgsrc} style={{width:'55px', height:'55px', marginRight:'14px'}}/>
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

export default ListForSaleSearchItem
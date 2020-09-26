import React from "react";
import {Link} from "react-router-dom";

function ExploreItem({item, type}) {
  return(<>
    <div className='ExploreItem'>
      <Link to={type==='master'?'/master':'/artist'}><img src={item.imgsrc}/></Link>
      <div><b><Link to={type==='master'?'/master':'/artist'}>{item.title}</Link></b></div>
      <div><Link to='/artist'>{item.artist}</Link></div>
    </div>
  </>);
}

export default ExploreItem;
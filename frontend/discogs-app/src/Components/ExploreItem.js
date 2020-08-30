import React from "react";
import {Link} from "react-router-dom";

function ExploreItem({item}) {
  return(<>
    <div className='ExploreItem'>
      <Link><img src={item.imgsrc}/></Link>
      <div><b><Link>{item.title}</Link></b></div>
      <div><Link>{item.artist}</Link></div>
    </div>
  </>);
}

export default ExploreItem;
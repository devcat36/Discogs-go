import React from "react";
import MarketplaceTab from "./MarketplaceTab";
import Marketplace from "./Marketplace";

function MarketplaceAllItems() {
  return (
    <div className={'contained'}>
      <MarketplaceTab activeItem={'All Items'}/>
      <Marketplace/>
    </div>
  );
}

export default MarketplaceAllItems;
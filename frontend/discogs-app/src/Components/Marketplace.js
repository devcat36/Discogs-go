import React, {useCallback, useState} from "react";
import {Grid} from "semantic-ui-react";
import FilterSidebar from "./FilterSidebar";
import ItemList from "./ItemList";

function Marketplace() {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={3}>
          <FilterSidebar type='marketplace'/>
        </Grid.Column>
        <Grid.Column width={13}>
          <ItemList/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Marketplace;
import React from 'react';
import {Menu, Icon} from 'semantic-ui-react'
import FilterGroup from "./FilterGroup";
import FilterSelectedGroup from "./FilterSelectedGroup";

function FilterSidebar(props) {
  if (props.showMoreCategory === '') {
    return (
      <>
        <FilterSelectedGroup selected_filters={props.selected_filters} onFilterRemove={props.onFilterRemove}
                             isCategorySelected={props.isCategorySelected}/>
        <Menu vertical fluid>
          {!props.isCategorySelected['Currency'] &&
          <FilterGroup category={'Currency'} filters={props.filters['Currency']} onFilterSelect={props.onFilterSelect}
                       onShowMore={props.onShowMore}/>}
          {(props.isCategorySelected['Currency'] && !props.isCategorySelected['Price Range']) &&
          <FilterGroup category={'Price Range'} filters={props.filters['Price Range']}
                       onFilterSelect={props.onFilterSelect}
                       onShowMore={props.onShowMore}/>}
          <FilterGroup category={'Genre'} filters={props.filters['Genre']} onFilterSelect={props.onFilterSelect}
                       onShowMore={props.onShowMore}/>
          <FilterGroup category={'Format'} filters={props.filters['Format']} onFilterSelect={props.onFilterSelect}
                       onShowMore={props.onShowMore}/>
          <FilterGroup category={'Media Condition'} filters={props.filters['Media Condition']}
                       onFilterSelect={props.onFilterSelect}
                       onShowMore={props.onShowMore}/>
        </Menu>
      </>
    );
  } else {
    return (
      <>
        <Menu vertical fluid>
          <FilterGroup category={props.showMoreCategory} filters={props.filters[props.showMoreCategory]}
                       onFilterSelect={props.onFilterSelect} showAll/>
          <Menu.Item onClick={props.onAllFilters}><Icon name={'arrow left'}/>All Filters</Menu.Item>
        </Menu>
      </>
    );
  }
}

export default FilterSidebar;
import React, {useCallback, useState} from 'react';
import {Header, List, Menu, Segment} from "semantic-ui-react";
import FilterElement from "./FilterElement";

const max_elements = 5;
const custom_range_categories = ['Price Range', 'Year'];

function FilterGroup(props) {
  const [range, setRange] = useState({low: 0, high: 0});

  var filters_arr = props.filters.slice(0, max_elements);
  if (props.showAll || props.category === 'Price Range') {
    filters_arr = props.filters;
  }

  const onCustomFilterSelect = useCallback(() => {
    if (range.high === 0 || isNaN(range.high) || isNaN(range.low)) {
      return;
    } else if (range.low > range.high) {
      props.onFilterSelect({
        category: props.category,
        custom: true,
        range: {low: range.high, high: range.low}
      });
    } else {
      props.onFilterSelect({
        category: props.category,
        custom: true,
        range
      });
    }
  }, [range, props]);
//vertical style={{width:'100%'}}
  return (
    <>
      <Menu.Item active><Header as={'h4'}>{props.category}</Header></Menu.Item>
      {custom_range_categories.includes(props.category) && <FilterElement
        custom range={range} setRange={setRange} onClickGo={onCustomFilterSelect}/>}
      {filters_arr.map(item => {
        return (<FilterElement
          name={item.name}
          count={item.count}
          symbol={item.symbol}
          onClick={() => props.onFilterSelect({
            category: props.category,
            name: item.name,
            count: item.count
          })}
        />)
      })}
      {(!props.showAll && !(props.category === 'Price Range') && props.filters.length > max_elements) &&
      <Menu.Item onClick={() => props.onShowMore(props.category)}>Show More...</Menu.Item>}
    </>
  );
}

export default FilterGroup;
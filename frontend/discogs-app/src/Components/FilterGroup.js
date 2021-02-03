import React from "react";
import { Header, Menu, Icon } from "semantic-ui-react";
import FilterCustomRangeElement from "./FilterCustomRangeElement";
import FilterElement from "./FilterElement";

function FilterGroup({
  filters,
  category,
  onFilterClick,
  custom,
  maxElements = 5,
  expanded,
  onExpand,
  onShrink,
}) {
  return (
    <>
      <Menu.Item active>
        <Header as={"h4"}>{category}</Header>
      </Menu.Item>
      {custom && (
        <FilterCustomRangeElement
          onFilterClick={(range) => onFilterClick({ ...range, category })}
        />
      )}
      {filters.slice(0, expanded ? maxElements : filters.length).map((filter) => {
        return (
          <FilterElement
            value={filter.value}
            text={filter.text}
            count={filter.count}
            onFilterClick={(value) => onFilterClick({ value, category })}
          />
        );
      })}
      {!expanded && filters.length > maxElements && (
        <Menu.Item onClick={onExpand}>Show More...</Menu.Item>
      )}
      {expanded && (
        <Menu.Item onClick={() => onShrink}>
          <Icon name={"arrow left"} />
          All Filters
        </Menu.Item>
      )}
    </>
  );
}

export default FilterGroup;

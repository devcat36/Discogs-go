import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import FilterGroup from "./FilterGroup";
import SelectedFilterGroup from "./SelectedFilterGroup";

function FilterSidebar({
  categories,
  filters,
  selectedFilters,
  onFilterAdd,
  onFilterRemove,
}) {
  const [expandedGroup, setExpandedGroup] = useState("");
  return (
    <>
      <SelectedFilterGroup
        filters={selectedFilters}
        onFilterClick={onFilterRemove}
      />
      <Menu vertical fluid>
        {categories.map(
          (category) =>
            (expandedGroup === "" || expandedGroup === category.name) &&
            (filters.find(filter => filter.category === category.name) !== undefined) &&
            !(
              category.multi &&
              selectedFilters.some(
                (filter) => filter.category === category.name
              )
            ) && (
              <FilterGroup
                filters={filters.filter(
                  (filter) => filter.category === category.name
                )}
                category={category.name}
                onFilterClick={onFilterAdd}
                custom={category.custom}
                multi={category.multi}
                expanded={category.name === expandedGroup}
                onExpand={() => {
                  setExpandedGroup(category.name);
                }}
                onShrink={() => {
                  setExpandedGroup(null);
                }}
              />
            )
        )}
      </Menu>
    </>
  );
}
export default FilterSidebar;

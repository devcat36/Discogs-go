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
  if(!filters && ! selectedFilters) return null;
  return (
    <>
      {selectedFilters && selectedFilters.length > 0 && (
        <SelectedFilterGroup
          filters={selectedFilters}
          onFilterClick={onFilterRemove}
        />
      )}
      <Menu vertical fluid>
        {categories.map(
          (category) =>
            (expandedGroup === "" || expandedGroup === category.name) &&
            filters.find((filter) => filter.category === category.name) !==
              undefined &&
            !(
              category.multi &&
              selectedFilters.some(
                (filter) => filter.category === category.name
              )
            ) && (
              <FilterGroup
                key={category.name}
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

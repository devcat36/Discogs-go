import React, {useCallback, useState} from "react";
import {Grid, Image} from "semantic-ui-react";
import FilterSidebar from "./FilterSidebar";
import * as Currency from "../currency.js";
import ItemList from "./ItemList";

const dummy_filters = {
  'Currency': [{name: 'EUR', count: 10000}, {name: 'USD', count: 5000}, {name: 'GBP', count: 100}],
  'Genre': [{name: 'Pop', count: 100}, {name: 'Rock', count: 50}, {name: 'Soul', count: 10}, {name: 'Jazz',count: 1}, {name: 'Folk', count: 10}, {name: 'Hip Hop', count: 7}, {name: 'Classical', count: 5}, {name: 'Latin', count: 1}],
  'Format': [{name: 'Vinyl', count: 6005}, {name: 'CD', count: 355}, {name: 'Cassette', count: 50}, {name: 'DVD', count: '12'}, {name: 'Box Set', count: '2'}],
  //'Media Condition': [{name:'Very Good Plus (VG+)', count:6003},{name:'Near Mint (NM or M-)', count:4753},{name:'Mint (M)', count:2342},{name:'Very Good (VG)', count:1122},{name:'Good Plus (G+)', count:854},{name:'Good (G)', count:535},{name:'Fair', count:266},{name:'Poor', count:14}]
'Media Condition': [{name:'VG+', count:6003},{name:'NM or M-', count:4753},{name:'M', count:2342},{name:'VG', count:1122},{name:'G+', count:854},{name:'G', count:535},{name:'Fair', count:266},{name:'Poor', count:14}]
};

function MarketplaceAllItems() {
  const [filters, setFilters] = useState(dummy_filters);
  const [selected, setSelected] = useState([]);
  // const [selected, setSelected] = useState([{category:'Genre', name:'Pop'},{category:'Genre', name:'Rock'}]);
  const [showMoreCategory, setShowMoreCategory] = useState('');
  const [isCategorySelected, setIsCategorySelected] = useState({'Currency': false, 'Price Range': false});


  const onFilterSelect = useCallback((filter) => {
    if (filter.custom === true) {
      if (filter.category === 'Price Range') {
        const symbol = Currency.CURRENCY_SYMBOL[selected.find(item => item.category === 'Currency').name];
        filter = {...filter, name: `${symbol}${filter.range.low} - ${symbol}${filter.range.high}`};
      }
    }
    setSelected(selected.concat(filter));
    let newFilter = {
      ...filters,
      [filter.category]: filters[[filter.category]].filter(item => item.name !== filter.name)
    };
    setShowMoreCategory('');
    setIsCategorySelected({...isCategorySelected, [filter.category]: true});
    if (filter.category === 'Currency') {
      const pr = Currency.CURRENCY_PRICE_RANGE[filter.name];
      const symbol = Currency.CURRENCY_SYMBOL[filter.name];
      const newPriceRange = [
        {name: `Less than ${symbol}${pr.min}`},
        {name: `${symbol}${pr.min} - ${symbol}${pr.min + pr.step}`},
        {name: `${symbol}${pr.min + pr.step} - ${symbol}${pr.min + pr.step * 2}`},
        {name: `${symbol}${pr.min + pr.step * 2} - ${symbol}${pr.min + pr.step * 3}`},
        {name: `${symbol}${pr.min + pr.step * 3} - ${symbol}${2 * (pr.min + pr.step * 3)}`},
        {name: `More than ${symbol}${2 * (pr.min + pr.step * 3)}`}
      ];
      newFilter = {...newFilter, 'Price Range': newPriceRange};
    }
    setFilters(newFilter);
  }, [selected, filters, isCategorySelected]);

  const onFilterRemove = useCallback((filter) => {
    let newSelected = selected.filter(item => filter.name !== item.name);
    let newFilter = filter.custom ? filters : {
      ...filters,
      [filter.category]: filters[[filter.category]].concat(filter)
    };
    let newIsCategorySelected = {...isCategorySelected, [filter.category]: false};

    if (filter.category === 'Currency') {
      if (isCategorySelected['Price Range']) {
        newSelected = newSelected.filter(item => item.category !== 'Price Range');
        newIsCategorySelected = {...newIsCategorySelected, 'Price Range': false};
      }
    }

    setSelected(newSelected);
    setFilters(newFilter);
    setIsCategorySelected(newIsCategorySelected);
  }, [selected, filters, isCategorySelected]);

  return (
    <div>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={3}>
            <FilterSidebar selected_filters={selected} filters={filters} onFilterSelect={onFilterSelect}
                           onFilterRemove={onFilterRemove} onShowMore={setShowMoreCategory}
                           onAllFilters={() => setShowMoreCategory('')}
                           showMoreCategory={showMoreCategory} isCategorySelected={isCategorySelected}/>
          </Grid.Column>
          <Grid.Column width={13}>
            <ItemList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default MarketplaceAllItems;
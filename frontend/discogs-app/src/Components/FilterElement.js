import React, {useCallback, useState} from 'react';
import {Input, Button, Menu, Label, Segment, Icon} from 'semantic-ui-react'
import * as Currency from "../currency";

const MENU_HEIGHT = '2.65rem';
const INPUT_WIDTH = '25%', INPUT_HEIGHT = '2rem';

function abbreviateNumber(value) {
    let newValue = value;
    if (value >= 1000) {
        let suffixes = ["", "K", "M", "B","T"];
        let suffixNum = Math.floor( (""+value).length/3 );
        let shortValue = '';
        for (let precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum !== 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 !== 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}

function FilterElement(props) {
  const [customClicked, setCustomClicked] = useState(false);
  const [isInputValid, setIsInputValid] = useState({low:true, high:true});
  const handleInputChange = useCallback((e)=>{
    if(!isNaN(e.target.value)){
      props.setRange({...props.range,[e.target.name]:parseFloat(e.target.value)});
      setIsInputValid({...isInputValid, [e.target.name]:true});
    }else{
      setIsInputValid({...isInputValid, [e.target.name]:false});
    }
  },[isInputValid, props]);
  let content = (<></>);
  if (!props.custom) content = (
    <Menu.Item onClick={props.onClick} style={{height: MENU_HEIGHT}}>
      {props.name} {props.name in Currency.CURRENCY_SYMBOL ? `(${Currency.CURRENCY_SYMBOL[props.name]})` : ''}
      {props.count !== undefined && <Label style={{width:'3rem'}}>{abbreviateNumber(props.count)}</Label>}
    </Menu.Item>);
  else if (props.custom && !customClicked) content = (
    <Menu.Item onClick={() => setCustomClicked(true)} style={{height: MENU_HEIGHT}}>
      Custom Range
    </Menu.Item>);
  else if (props.custom && customClicked) content = (
    <Menu.Item>
      <div onClick={() => setCustomClicked(false)}>Custom Range <Icon name={'x'}/></div>
      <div style={{width: '100%', margin: '10px 0 0 0'}}>
        <Input name={'low'} error={!isInputValid.low} size={'tiny'} style={{width: INPUT_WIDTH, height: INPUT_HEIGHT}}
               onChange={handleInputChange}/>
        <span style={{margin: '0 8px 0 8px'}}>-</span>
        <Input name={'high'} error={!isInputValid.high} size={'tiny'} style={{width: INPUT_WIDTH, height: INPUT_HEIGHT}}
               onChange={handleInputChange}/>
        <Button size={'tiny'} style={{height: INPUT_HEIGHT, margin: '0 0 0 10px'}} onClick={props.onClickGo}>Go</Button>
      </div>
    </Menu.Item>
  );
  return content;
}

export default FilterElement;
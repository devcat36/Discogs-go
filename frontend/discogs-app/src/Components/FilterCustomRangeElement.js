import React, { useCallback, useState } from "react";
import { Menu, Input, Icon, Button } from "semantic-ui-react";

const MENU_HEIGHT = "2.65rem";
const INPUT_WIDTH = "25%",
  INPUT_HEIGHT = "2rem";

function FilterCustomRangeElement({ onFilterClick }) {
  const [customClicked, setCustomClicked] = useState(false);
  const [input, setInput] = useState({
    low: null,
    high: null,
    validLow: true,
    validHigh: true,
  });
  const handleLowInputChange = useCallback(
    (inputValue) => {
      if (input.high !== null && inputValue > input.high)
        setInput({ ...input, low: inputValue, validLow: false });
      else setInput({ ...input, low: inputValue, valid: true });
    },
    [input, setInput]
  );
  const handleHighInputChange = useCallback(
    (inputValue) => {
      if (input.low !== null && inputValue < input.low)
        setInput({ ...input, high: inputValue, validHigh: false });
      else setInput({ ...input, high: inputValue, valid: true });
    },
    [input, setInput]
  );

  return (
    <Menu.Item>
      <div onClick={() => setCustomClicked(false)}>
        Custom Range <Icon name={"x"} />
      </div>
      {customClicked && (
        <div>
          <div style={{ width: "100%", margin: "10px 0 0 0" }}>
            <Input
              name={"low"}
              error={!input.validLow}
              size={"tiny"}
              style={{ width: INPUT_WIDTH, height: INPUT_HEIGHT }}
              onChange={(event, data) => handleLowInputChange(data)}
            />
            <span style={{ margin: "0 8px 0 8px" }}>-</span>
            <Input
              name={"high"}
              error={!input.validHigh}
              size={"tiny"}
              style={{ width: INPUT_WIDTH, height: INPUT_HEIGHT }}
              onChange={(event, data) => handleHighInputChange(data)}
            />
            <Button
              size={"tiny"}
              style={{ height: INPUT_HEIGHT, margin: "0 0 0 10px" }}
              onClick={() =>
                onFilterClick({low: input.low, high: input.high })
              }
            >
              Go
            </Button>
          </div>
        </div>
      )}
    </Menu.Item>
  );
}

export default FilterCustomRangeElement;

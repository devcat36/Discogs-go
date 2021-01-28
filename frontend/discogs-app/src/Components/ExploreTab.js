import React, { useCallback } from "react";
import { Header, Input, Menu } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";

function ExploreTab({ activeItem, searchTerm }) {
  const history = useHistory();
  const handleItemClick = useCallback(
    (e, { name }) => {
      if (name === "Master") history.push("/explore/master");
      else if (name === "Artist") history.push("/explore/artist");
    },
    [history]
  );
  return (
    <Menu tabular>
      <Menu.Item
        name="Master"
        active={activeItem === "Master"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Artist"
        active={activeItem === "Artist"}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Link
            to={`/marketplace/listings/term=${searchTerm}&page=1&show_count=25&sort=Relevance`}
          >
            Search Marketplace
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default ExploreTab;

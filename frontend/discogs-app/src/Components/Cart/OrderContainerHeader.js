import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

export default function OrderContainerHeader({ seller }) {
  return (
    <Header as="h3" attached="top" block>
      Order From&nbsp;
      <Link to={'/marketplace/store/' + seller.id}>{seller.userName}</Link>
    </Header>
  );
}

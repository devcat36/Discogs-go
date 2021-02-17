import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function OrderContainerHeader({ seller }) {
  return (
    <Header attached="top" block>
      <span className={'ContainerHeader'}>
        Order From&nbsp;
        <Link to={'/marketplace/store/' + seller.id}>{seller.userName}</Link>
      </span>
      <Icon className="DeleteOrderIcon" name="trash alternate outline" color="grey" />
    </Header>
  );
}

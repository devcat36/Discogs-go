import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles = {
  containerHeader: {
    fontSize: '1.4rem',
  },
  deleteIcon: {
    float: 'right',
  },
};

export default function OrderContainerHeader({ seller }) {
  return (
    <Header attached="top" block>
      <span style={styles.containerHeader}>
        Order From&nbsp;
        <Link to={'/marketplace/store/' + seller.id}>{seller.userName}</Link>
      </span>
      <Icon style={styles.deleteIcon} name="trash alternate outline" color="grey" />
    </Header>
  );
}

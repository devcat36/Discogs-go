import React from 'react';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function OrderButton({ orderId }) {
  const history = useHistory();
  return (
    <Button
      className="OrderButton"
      color="green"
      fluid
      onClick={() => {
        history.push('/marketplace/order/' + orderId);
      }}
    >
      Place order and pay now
    </Button>
  );
}

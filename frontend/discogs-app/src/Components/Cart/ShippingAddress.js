import React from 'react';
import { COUNTRY_OPTIONS, getTextWithValueInOptions } from '../../constants';

export default function ShippingAddress({ address }) {
  return (
    <p>
      {address.fullName}
      <br />
      {address.address1}
      <br />
      {address.address2}
      <br />
      {address.city}, {address.region}
      <br />
      {getTextWithValueInOptions(address.country, COUNTRY_OPTIONS)}
    </p>
  );
}

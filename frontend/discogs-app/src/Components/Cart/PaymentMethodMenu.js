import React from 'react';
import { Menu, Radio, Image, Form } from 'semantic-ui-react';

export default function PaymentMethodMenu({ methods }) {
  const CreditCardMenuItem = (
    <Menu.Item className="CreditCardMenu">
      <Form.Field>
        <Radio
          floated="left"
          label={
            <label>
              Credit Card
              <Image
                src={
                  'https://a.discogs.com/86aa88791ae6ffc886bdc2cc9a5c60ff590fbab6/images/btn_paynowCC_NOBT.png'
                }
              />
            </label>
          }
        />
      </Form.Field>
    </Menu.Item>
  );

  const PaypalMenuItem = (
    <Menu.Item className="PaypalMenu">
      <Form.Field>
        <Radio
          label={
            <label>
              Paypal
              <Image
                src={
                  'https://a.discogs.com/86aa88791ae6ffc886bdc2cc9a5c60ff590fbab6/images/PayPal_mark_37x23.gif'
                }
              />
            </label>
          }
        />
      </Form.Field>
    </Menu.Item>
  );

  const BankTransferMenuItem = (
    <Menu.Item>
      <Form.Field>
        <Radio label={'Bank Transfer, Check, Cash, or Money Order'} />
      </Form.Field>
    </Menu.Item>
  );

  return (
    <Form style={{ float: 'left', width: '100%' }}>
      <Menu vertical fluid className={'PaymentMenu'}>
        {methods.includes('CREDIT_CARD') && CreditCardMenuItem}
        {methods.includes('PAYPAL') && PaypalMenuItem}
        {methods.includes('BANK_TRANSFER') && BankTransferMenuItem}
      </Menu>
    </Form>
  );
}

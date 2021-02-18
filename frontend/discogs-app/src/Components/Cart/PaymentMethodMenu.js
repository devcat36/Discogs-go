import React from 'react';
import { Menu, Radio, Image, Form } from 'semantic-ui-react';

const styles = {
  form: {
    float: 'left',
    width: '100%',
  },
  paymentMenu: {
    marginBottom: '0.8rem !important',
  },
  creditCardImage: {
    marginTop: '0.3rem',
  },
  creditCardRadio: {
    width: '100%',
  },
  paypalImage: {
    display: 'inline',
    marginLeft: '0.5rem',
  },
};

export default function PaymentMethodMenu({ methods }) {
  const CreditCardMenuItem = (
    <Menu.Item>
      <Form.Field>
        <Radio
          floated="left"
          stlye={styles.creditCardRadio}
          label={
            <label>
              Credit Card
              <Image
                src={
                  'https://a.discogs.com/86aa88791ae6ffc886bdc2cc9a5c60ff590fbab6/images/btn_paynowCC_NOBT.png'
                }
                style={styles.creditCardImage}
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
                stlye={styles.paypalImage}
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
    <Form style={styles.form}>
      <Menu vertical fluid style={styles.paymentMenu}>
        {methods.includes('CREDIT_CARD') && CreditCardMenuItem}
        {methods.includes('PAYPAL') && PaypalMenuItem}
        {methods.includes('BANK_TRANSFER') && BankTransferMenuItem}
      </Menu>
    </Form>
  );
}

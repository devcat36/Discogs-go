import React from "react";
import { Menu, Radio, Image, Form } from "semantic-ui-react";

function PaymentMethodMenu({ methods }) {
  return (
    <Menu vertical fluid className={"PaymentMenu"}>
      {methods.includes("CREDIT_CARD") && (
        <Menu.Item>
          <Form.Field>
            <Radio
              floated={"left"}
              label={
                <label>
                  Credit Card
                  <Image
                    style={{ marginTop: "0.3rem" }}
                    src={
                      "https://a.discogs.com/86aa88791ae6ffc886bdc2cc9a5c60ff590fbab6/images/btn_paynowCC_NOBT.png"
                    }
                  />
                </label>
              }
            />
          </Form.Field>
        </Menu.Item>
      )}
      {methods.includes("PAYPAL") && (
        <Menu.Item>
          <Form.Field>
            <Radio
              style={{ width: "100%" }}
              label={
                <label>
                  Paypal
                  <Image
                    style={{ display: "inline", marginLeft: "0.5rem" }}
                    src={
                      "https://a.discogs.com/86aa88791ae6ffc886bdc2cc9a5c60ff590fbab6/images/PayPal_mark_37x23.gif"
                    }
                  />
                </label>
              }
            />
          </Form.Field>
        </Menu.Item>
      )}
      {methods.includes("BANK_TRANSFER") && (
        <Menu.Item>
          <Form.Field>
            <Radio label={"Bank Transfer, Check, Cash, or Money Order"} />
          </Form.Field>
        </Menu.Item>
      )}
    </Menu>
  );
}

export default PaymentMethodMenu;

import React, {useState} from "react";
import {Grid, Menu, Header, Segment, Dropdown, Button, Form, Input, TextArea, Icon} from "semantic-ui-react";
import * as Currency from "../currency";
import {Link} from "react-router-dom";

const countryOptions = [
  {key: 'af', value: 'af', flag: 'af', text: 'Afghanistan'},
  {key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands'},
  {key: 'al', value: 'al', flag: 'al', text: 'Albania'},
  {key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria'},
  {key: 'as', value: 'as', flag: 'as', text: 'American Samoa'},
  {key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra'},
  {key: 'ao', value: 'ao', flag: 'ao', text: 'Angola'},
  {key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla'},
  {key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua'},
  {key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina'},
  {key: 'am', value: 'am', flag: 'am', text: 'Armenia'},
  {key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba'},
  {key: 'au', value: 'au', flag: 'au', text: 'Australia'},
  {key: 'at', value: 'at', flag: 'at', text: 'Austria'},
  {key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan'},
  {key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas'},
  {key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain'},
  {key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh'},
  {key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados'},
  {key: 'by', value: 'by', flag: 'by', text: 'Belarus'},
  {key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
  {key: 'bz', value: 'bz', flag: 'bz', text: 'Belize'},
  {key: 'bj', value: 'bj', flag: 'bj', text: 'Benin'},
];

const currencyOptions = Object.keys(Currency.CURRENCY_SYMBOL).map(key => {
  const cur = `${key} (${Currency.CURRENCY_SYMBOL[key]})`;
  return {key: cur, value: cur, text: cur};
});

const paymentOptions = ['PayPal', 'Credit Card', 'Bank Transfer', 'Check', 'Cash'].map(e => {
  return {key: e, value: e, text: e}
});

const languageOptions = ['English', 'Korean'].map(e => {
  return {key: e, value: e, text: e}
});

const timeZoneOptions = ['-11', '-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', 'UTC', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+9.5', '+10', '+10.5', '+11', '+12'].map(e => {
  return {key: e, value: e, text: `(GMT ${e}) PST`}
});

function UserSettings({initialSettings}) {
  const [settings, setSettings] = useState(initialSettings);
  return (
    <>
      <Header as="h2">
        User Profile Settings
        <Header.Subheader>
          Set your timezone, browsing options, profile information, change your email address, or update your password.
        </Header.Subheader>
      </Header>
      <Header as="h3" block attached="top">General settings</Header>
      <Segment attached>
        <Form>
          <Form.Field>
            <label>Language</label>
            <Dropdown
              selection
              options={languageOptions}
              value={settings.language ? settings.language : languageOptions[0].value}
              onChange={(e, data) => setSettings({...settings, language: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Time Zone</label>
            <Dropdown
              selection
              options={timeZoneOptions}
              value={settings.timeZone ? settings.timeZone : timeZoneOptions[0].value}
              onChange={(e, data) => setSettings({...settings, timeZone: data.value})}
            />
          </Form.Field>
        </Form>
      </Segment>
      <Header as="h3" block attached="top bottom" style={{borderRadius: 0}}>Profile settings</Header>
      <Segment attached>
        <Header as="h3">Profile Photo</Header>
        <img
          src={settings.profilePhoto ? settings.profilePhoto : 'https://react.semantic-ui.com/images/wireframe/image.png'}
          style={{width: '400px'}}
          alt="profile"
        /><br/>
        <Input
          type="file"
          onChange={(e) => setSettings({...settings, profilePhoto: URL.createObjectURL(e.target.files[0])})}
        />&nbsp;&nbsp;&nbsp;
        <Icon
          name="cancel"
          size="large"
          link
          onClick={() => setSettings({...settings, profilePhoto: undefined})}
        />
        <br/><br/>
        <Form>
          <Form.Field>
            <label>Real Name</label>
            <Input
              value={settings.realName}
              onChange={(e, data) => setSettings({...settings, realName: data.value})}
              placeholer="optional"
            />
          </Form.Field>
          <Form.Field>
            <label>Profile</label>
            <TextArea
              value={settings.profile}
              onChange={(e, data) => setSettings({...settings, profile: data.value})}
              placeholer="optional"
            />
          </Form.Field>
          <Form.Field>
            <label>Geographic Location</label>
            <Input
              value={settings.location}
              onChange={(e, data) => setSettings({...settings, location: data.value})}
              placeholer="optional"
            />
          </Form.Field>
          <Form.Field>
            <label>Home Page</label>
            <Input
              value={settings.homePage}
              onChange={(e, data) => setSettings({...settings, homePage: data.value})}
              placeholer="optional"
            />
          </Form.Field>
          <Button content="Save Settings" icon="user" color="green"/>
        </Form>
      </Segment>
      <Header as="h3" block attached="top">Change Password</Header>
      <Segment attached>
        <Form>
          <Form.Field>
            <label>Current Password</label>
            <Input type='password'/>
          </Form.Field>
          <Form.Field>
            <label>New password</label>
            <Input type='password'/>
          </Form.Field>
          <Form.Field>
            <label>Confirm new password</label>
            <Input type='password'/>
          </Form.Field>
          <a>Forgot your password?</a><br/>
          <Button color='green' content='Change Password'/>
        </Form>
      </Segment>
    </>

  );
}

function SellerSettings({initialSettings}) {
  const [settings, setSettings] = useState(initialSettings);
  return (
    <>
      <Header as="h2">
        Seller Settings
        <Header.Subheader>
          You must fill in these fields before you can post items for sale. This information will be displayed on your
          item details.
        </Header.Subheader>
      </Header>
      <Header as="h3" block attached="top">
        Shipping Information
      </Header>
      <Segment attached>
        <Form>
          <Form.Field>
            <label>Full Name</label>
            <Input
              value={settings.fullName}
              onChange={(e, data) => setSettings({...settings, fullName: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <Input
              value={settings.address1}
              onChange={(e, data) => setSettings({...settings, address1: data.value})}
            /><br/>
            <Input
              style={{marginTop: '3px'}}
              value={settings.address2}
              onChange={(e, data) => setSettings({...settings, address2: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>City/Town</label>
            <Input
              value={settings.city}
              onChange={(e, data) => setSettings({...settings, city: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Region/State</label>
            <Input
              value={settings.postalCode}
              onChange={(e, data) => setSettings({...settings, postalCode: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Country</label>
            <Dropdown
              options={countryOptions}
              value={settings.country ? settings.country : countryOptions[0].value}
              onChange={(e, data) => setSettings({
                ...settings,
                country: data.value
              })}
              selection
            />
          </Form.Field>
          <Button
            color="green"
            icon="check"
            content="Save Address"
          />
        </Form>
      </Segment>
      <Header as="h2" block attached="top">
        Payment Methods
      </Header>
      <Segment attached>
        <Form>
          <Form.Field>
            Please select each payment method that you, as a seller, will accept. You can select as many or as few of
            these
            options as you would like. Buyers will see this on the order page.
            <br/>
            <Dropdown
              selection
              options={paymentOptions}
              multiple
              value={settings.paymentMethods ? settings.paymentMethods : []}
              onChange={(e, data) => setSettings({...settings, paymentMethods: data.value})}
              placeholder="Select Payment Options"
            />
          </Form.Field>
          <Form.Field>
            <label>Listing Currency</label>
            <Dropdown
              options={currencyOptions}
              value={settings.currency ? settings.currency : currencyOptions[0].value}
              onChange={(e, data) => setSettings({...settings, currency: data.value})}
              selection
            />
          </Form.Field>
          <Button
            color="green"
            icon="check"
            content="Save Payment Information"
          />
        </Form>
      </Segment>
      <Header as="h2" block attached="top">Shipping Policy</Header>
      <Segment attached>
        <Form>
          <Form.Field>
            <label>Ships to</label>
            <Dropdown
              options={countryOptions}
              value={settings.shippingCountry}
              onChange={(e, data) => {
                setSettings({
                  ...settings,
                  shippingCountry: data.value
                });
                console.log(settings.shippingCountry)
              }}
              selection
              multiple
              search
              placeholder="Select Shipping Countries"
            />
          </Form.Field>
          <Form.Field>
            <label>Seller Terms</label>
            <TextArea
              value={settings.sellerTerms}
              onChange={(e, data) => setSettings({...settings, sellerTerms: data.value})}
            />
          </Form.Field>
          <Button
            color="green"
            icon="check"
            content="Save Shipping Information"
          />
        </Form>
      </Segment>
    </>
  );
}

function BuyerSettings({initialSettings}) {
  const [settings, setSettings] = useState(initialSettings);
  return (
    <>
      <Header as="h2">
        Marketplace Settings for Buyers
        <Header.Subheader>
          You must fill in these fields before you can purchase items for sale. You must save your changes at the end of
          the form.
        </Header.Subheader>
      </Header>
      <Header as="h3" block attached="top">
        Default Currency Display
      </Header>
      <Segment attached>
        <Header as="h4">Currency</Header>
        <Dropdown
          options={currencyOptions}
          value={settings.currency ? settings.currency : currencyOptions[0].value}
          onChange={(e, data) => setSettings({...settings, currency: data.value})}
          selection
        />
        &nbsp;&nbsp;
        <Button
          color="green"
          icon="check"
          content="Save Currency"
        />
      </Segment>
      <Header as="h3" block attached="top">
        Shipping Information
      </Header>
      <Segment attached>
        <Form>
          <Form.Field>
            <label>Full Name</label>
            <Input
              value={settings.fullName}
              onChange={(e, data) => setSettings({...settings, fullName: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <Input
              value={settings.address1}
              onChange={(e, data) => setSettings({...settings, address1: data.value})}
            /><br/>
            <Input
              style={{marginTop: '3px'}}
              value={settings.address2}
              onChange={(e, data) => setSettings({...settings, address2: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>City/Town</label>
            <Input
              value={settings.city}
              onChange={(e, data) => setSettings({...settings, city: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Region/State</label>
            <Input
              value={settings.postalCode}
              onChange={(e, data) => setSettings({...settings, postalCode: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Country</label>
            <Dropdown
              options={countryOptions}
              value={settings.country ? settings.country : countryOptions[0].value}
              onChange={(e, data) => setSettings({
                ...settings,
                country: data.value
              })}
              selection
            />
          </Form.Field>
          <Button
            color="green"
            icon="check"
            content="Save Shipping Information"
          />
        </Form>
      </Segment>
    </>
  );
}

function Settings({initialMode, initialSettings}) {
  const [mode, setMode] = useState(initialMode);
  return (
    <div className="contained Settings">
      <Grid>
        <Grid.Column width={3}>
          <Menu vertical tabular fluid style={{height: '100%'}}>
            <Menu.Item
              name="User"
              active={mode === 'User'}
              onClick={() => setMode('User')}
            />
            <Menu.Item
              name="Buyer"
              active={mode === 'Buyer'}
              onClick={() => setMode('Buyer')}
            />
            <Menu.Item
              name="Seller"
              active={mode === 'Seller'}
              onClick={() => setMode('Seller')}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column width={13}>
          {mode === 'User' && <UserSettings initialSettings={initialSettings.user}/>}
          {mode === 'Buyer' && <BuyerSettings initialSettings={initialSettings.buyer}/>}
          {mode === 'Seller' && <SellerSettings initialSettings={initialSettings.seller}/>}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Settings
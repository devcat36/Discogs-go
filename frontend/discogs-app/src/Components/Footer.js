import React from 'react';
import {Dropdown, Icon, Segment, Container, Grid, Header, List, Menu, Image, Input, Button} from 'semantic-ui-react'
import logo from "../images/discogs-white.png";

function Footer() {
    const languageOptions = [
      { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
      { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
      { key: 'Danish', text: 'Danish', value: 'Danish' },
      { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
      { key: 'English', text: 'English', value: 'English' },
      { key: 'French', text: 'French', value: 'French' },
      { key: 'German', text: 'German', value: 'German' },
      { key: 'Greek', text: 'Greek', value: 'Greek' },
      { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
      { key: 'Italian', text: 'Italian', value: 'Italian' },
      { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
      { key: 'Korean', text: 'Korean', value: 'Korean' },
      { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
      { key: 'Persian', text: 'Persian', value: 'Persian' },
      { key: 'Polish', text: 'Polish', value: 'Polish' },
      { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
      { key: 'Russian', text: 'Russian', value: 'Russian' },
      { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
      { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
      { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
      { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
    ];
    return (
        <>
        <Segment inverted vertical style={{ padding: '3em 0em' }}>
          <Container>
            <Grid divided inverted>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Discogs' />
                  <List link inverted>
                    <List.Item as='a'>About Us</List.Item>
                    <List.Item as='a'>Blog</List.Item>
                    <List.Item as='a'>App</List.Item>
                    <List.Item as='a'>Careers</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Help Is Here' />
                  <List link inverted>
                    <List.Item as='a'>Help & Support</List.Item>
                    <List.Item as='a'>Forum</List.Item>
                    <List.Item as='a'>Database Guidelines</List.Item>
                    <List.Item as='a'>Discogs Shipping</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Join In' />
                  <List link inverted>
                    <List.Item as='a'>Get Started</List.Item>
                    <List.Item as='a'>Sign Up</List.Item>
                    <List.Item as='a'>Contribute</List.Item>
                    <List.Item as='a'>Add Release</List.Item>
                    <List.Item as='a'>Contributor List</List.Item>
                    <List.Item as='a'>Add Release</List.Item>
                    <List.Item as='a'>Help Translate</List.Item>
                    <List.Item as='a'>Discogs Events</List.Item>
                    <List.Item as='a'>Advertise With Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='More Databases' />
                  <List link inverted>
                    <List.Item as='a'>Record Shops</List.Item>
                    <List.Item as='a'>Music Gear</List.Item>
                    <List.Item as='a'>Books</List.Item>
                    <List.Item as='a'>Films</List.Item>
                    <List.Item as='a'>Comics</List.Item>
                    <List.Item as='a'>Posters</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Follow Us' />
                  <List link inverted>
                    <List.Item as='a'>Facebook</List.Item>
                    <List.Item as='a'>Twitter</List.Item>
                    <List.Item as='a'>Instagram</List.Item>
                    <List.Item as='a'>Mixcloud</List.Item>
                    <List.Item as='a'>Soundcloud</List.Item>
                    <List.Item as='a'>Pinterest</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Menu inverted borderless size={"small"} style={{borderRadius:0, marginBottom:0, marginTop:0, backgroundColor:"#303030"}}>
            <Menu.Item as='a' header>
                <Image src={logo} style={{marginRight: '0em', height:'25px'}}/>
            </Menu.Item>
            <Menu.Item>© 2020 Discogs®</Menu.Item>
            <Menu.Item><Button inverted >Show Purposes</Button></Menu.Item>
            <Menu.Item>Cookie Policy</Menu.Item>
            <Menu.Item>Terms of Service</Menu.Item>
            <Menu.Item>Privacy Policy</Menu.Item>
            <Menu.Item>California Privacy Notice</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                  <Dropdown
                    button
                    className='icon'
                    floating
                    labeled
                    icon='world'
                    options={languageOptions}
                    text='English'
                  />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        </>
    );
}

export default Footer;
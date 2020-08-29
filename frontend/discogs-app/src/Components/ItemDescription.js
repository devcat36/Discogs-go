import React, {useRef} from "react";
import {Grid, Item, Image, Header, Divider, Table, List, Ref} from 'semantic-ui-react';
import ItemSidebar from "./ItemSidebar";

function ItemDescription() {
  const contextRef=useRef(null);
  return (
    <div className={'ItemDescription contained'}>
      <Grid divided>
        <Grid.Column width={11}>
          <div className={'Description'} ref={contextRef}>
            <Item.Group unstackable className={'ItemSpecs'}>
              <Item>
                <Item.Image size={'small'}
                            src={'https://img.discogs.com/U2zKtmCbe57_Us8Z7DXxwL2mDfo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9102332-1474809687-6678.jpeg.jpg'}/>
                <Item.Content>
                  <Item.Header>Die Kreuzen ‎– Cows And Beer</Item.Header>
                  <Item.Meta>
                    <div className={'Specs'}><span className={'SpecLabel'}>Label:</span>Barbarian Records ‎– BARB-611
                    </div>
                    <div className={'Specs'}><span className={'SpecLabel'}>Format:</span>Vinyl, 7", 45 RPM, Reissue,
                      White/Black Sleeve
                    </div>
                    <div className={'Specs'}><span className={'SpecLabel'}>Country:</span>US</div>
                    <div className={'Specs'}><span className={'SpecLabel'}>Released:</span>2007</div>
                    <div className={'Specs'}><span className={'SpecLabel'}>Genre:</span>Rock</div>
                    <div className={'Specs'}><span className={'SpecLabel'}>Style:</span>Hardcore, Punk</div>
                  </Item.Meta>
                </Item.Content>
              </Item>
            </Item.Group>
            <Header as={'h3'}>Tracklist</Header>
            <Divider/>
            <Table basic={'very'} unstackable>
              <Table.Row>
                <Table.Cell>A1</Table.Cell>
                <Table.Cell>Hate Me</Table.Cell>
                <Table.Cell textAlign={'right'}>0:46</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>A2</Table.Cell>
                <Table.Cell>Pain</Table.Cell>
                <Table.Cell textAlign={'right'}>1:04</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>A3</Table.Cell>
                <Table.Cell>Enemies</Table.Cell>
                <Table.Cell textAlign={'right'}>0:56</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>B1</Table.Cell>
                <Table.Cell>In School</Table.Cell>
                <Table.Cell textAlign={'right'}>1:25</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>B2</Table.Cell>
                <Table.Cell>Think For Me</Table.Cell>
                <Table.Cell textAlign={'right'}>1:37</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>B3</Table.Cell>
                <Table.Cell>Don't Say Please</Table.Cell>
                <Table.Cell textAlign={'right'}>1:00</Table.Cell>
              </Table.Row>
            </Table>
            <Header as={'h3'}>Credits</Header>
            <Divider/>
            <List>
              <List.Item>
                <span className={'CreditRole'}>Artwork [Cover Drawing]</span>
                &nbsp;&nbsp;-&nbsp;&nbsp;Richard Kohl
              </List.Item>
              <List.Item>
                <span className={'CreditRole'}>Bass</span>
                &nbsp;&nbsp;-&nbsp;&nbsp;Keith Brammer
              </List.Item>
              <List.Item>
                <span className={'CreditRole'}>Drums</span>
                &nbsp;&nbsp;-&nbsp;&nbsp;Erik Tunison
              </List.Item>
              <List.Item>
                <span className={'CreditRole'}>Guitar</span>
                &nbsp;&nbsp;-&nbsp;&nbsp;Herman Egeness
              </List.Item>
            </List>
            <Header as={'h3'}>Notes</Header>
            <Divider/>
            <p>
              Originally released 1982. This is an official reissue 25 years later.<br/><br/>
              Recorded on Sep. 11, 1982.<br/><br/>
              Released in two different sleeve versions: black on white, and black on orange.<br/><br/>
              Contains lyric sheet.<br/><br/>
              Track order printed on back of sleeve is wrong (as it was on the original pressing).
            </p>
            <Header as={'h3'}>Barcode and Other Identifiers</Header>
            <Divider/>
            <List>
              <List.Item>Matrix / Runout: BARB-611-A</List.Item>
              <List.Item>Matrix / Runout: BARB-611-B</List.Item>
            </List>
            <Header as={'h3'}>Seller Terms</Header>
            <Divider/>
            <p><span>+++ WARNING! +++ Covid-19 due restrictions for shipments +++</span><br /><span>(please take a minute on this to avoid further problems and lost of time and money):</span><br /><br /><span>While there's basically no problems to ship stuff in whole Europe, to many countries it is still very expensive or time-consuming.</span><br /><span>To name a few: for the US there's actually an extra-high "Corona-rate" of min. 55 EUR (= $60 ca.); to Canada stuff is shipped via surface; and it is still impossible to many others (especially south &amp; central America), as long as Covid-19 is still an extreme emergency there.</span><br /><span>Similar problems actually for all other continents (and the list&amp;terms are changing almost everyday:&nbsp;</span><a href="https://www.deutschepost.de/de/c/coronavirus.html" rel="nofollow noopener" target="_blank">https://www.deutschepost.de/de/c/coronavirus.html</a><span>&nbsp;).</span><br /><span>Anyway, you can contact me BEFORE ORDERING and i will check how the situation is for any single case, that's not a problem.</span><br /><br /><span>Many thanks for your attention, and stay safe!</span><br /><br /><span>...and further on:</span><br /><br /><span>The golden rules (please take a minute and read this details before you order).</span><br /><br /><span>- Buyer is responsible for paying shipping:</span><br /><span>shipping rates (see below) includes the package,</span><br /><span>any order ships as soon as the payment has been made.</span><br /><br /><span>- For Germany: &Uuml;berweisung (bevorzugt), Paypal oder Bar (z.B. bei Abholung).</span><br /><span>7"s (egal wieviele) = 2,50&euro; unversichert , oder 5&euro; versichert.</span><br /><span>LPs (egal wieviele) = 5&euro; versichert (Hermes).</span><br /><br /><span>- For EU-countries: Paypal, Bank-Transfer (IBAN), Cash, IMO.</span><br /><span>0 to 500 gr = 8 &euro;uro, registered mail.</span><br /><span>Up to 1 kg = 12 &euro;uro, registered mail.</span><br /><span>Up to 2 kg = 17 &euro;uro, registered</span><br /><span>(in some countries i can also ship with Hermes spedition wich costs 15&euro;).</span><br /><br /><span>- Worldwide (non-EU countries): Paypal, Cash, IMO.</span><br /><span>0 to 500 gr = 9 &euro;uro, registered mail.</span><br /><span>Up to 1 kg = 13 &euro;uro, registered mail.</span><br /><span>Up to 2 kg = 23 &euro;uro, registered mail.</span><br /><span>-----------------------------------------------------------------------</span><br /><br /><span>Weights (includes packaging):</span><br /><span>0-500 gr = ca. 1 x LP or 4-5 x 7inch.</span><br /><span>Up to 1 kg = 2-3 x LPs.</span><br /><span>Up to 2 kg = ca 6 x LPs.</span><br /><span>Some records may weight more (i.e. with gatefold jacket, 180gr vinyl, huge booklet, etc).</span><br /><span>-------------------------------------------------------------------------------------------------------------------</span><br /><br /><span>- if you decide to order, i will soon send you an invoice that includes the shipping rate.</span><br /><span>Payment possibly due not later than 5 days after order has been placed.</span><br /><br /><span>- i'm located and ship from Berlin/Germany: pick up ordered stuff or trade meetings are possible.</span><br /><span>If infos are needed about anything from hold-on records, arrange discounts or whatever, please message me upfront.</span><br /><br /><span>- handling / packaging: i always use new &amp; appropriate cardboard mailers (purchased from specialists Protected.de) and stiffeners - professional packaging guaranteed! (check the feedbacks).</span><br /><span>Orders ships promptly after the payment has arrived: no senseless wasting of time.</span><br /><span>For any other question about shipping, packaging, etc., feel free to contact me.</span><br /><br /><span>- grading:</span><br /><span>is it not quite incredible how many used records graded NM (or even M), are offered in the Marketplace?</span><br /><span>Is it not NM meaning that the record is close to be new?...</span><br /><span>Anyway, i try to grade records conservatively, especially the 2nd hand ones.</span><br /><span>In example: only new/unplayed &amp; spotless records gets M (a bend sealed LP did'nt get it, and it's described).</span><br /><span>If there are differencies with the descriptions (i.e.: the insert is missing) i'm going to state it in the comments.</span><br /><span>At the end of the details i've included my grading range for cover/sleeve and vinyl(labels and inserts get an extra mention in the comments, if necessary): basically i've added the SS (still sealed), and the EX (excellent) stage between VG+ and NM, because i think the range is too wide and not specific enough.</span><br /><br /><span>- feedback:</span><br /><span>i will leave that as soon as the transaction has successfully completed, and both parts are hopefully satisfied.</span><br /><span>If there's any problems with the item/s or the delivery, i'll do anything possible to work out a solution.</span><br /><br /><span>- trades are welcome:</span><br /><span>you can contact me and we will try to arrange something, if interesting</span><br /><span>(also for sale a bunch of mostly new t-shirts - see profile page).</span><br /><br /><span>Please feel free to message me if you have any other question or suggestion about conditions, discounts, shipments, insurance, payments, fees, etc.</span><br /><br /><span>Thanks for your attention!</span><br /><span>------------------------------------------------------------------------------------------------------------------------</span><br /><br /><span>- Grading (reprise...):</span><br /><br /><span>SS(STILL SEALED):</span><br /><span>Sealed at factory and never opened. Disc is assumed to be undamaged and mint, but this cannot be proven until the album is actually opened and the disc examined.</span><br /><br /><span>M(MINT):</span><br /><span>Perfection, no flaws, defects, marks or otherwise indications of being handled or played. Any scuffs, hairline scratches or other marks disqualify discs from this category. I use this grade only on new/unplayed records, as even the act of inserting the disc or removing it from the paper sleeve, may cause scuff marks on the vinyl.</span><br /><br /><span>NM or M- (NEAR MINT or MINT MINUS):</span><br /><span>This is highest grade that I will assign to opened, handled records. The vinyl is virtually flawless, bright and shiny. A very minor, barely visible scuff or two may be permitted(and eventually noted in the comments), but no scratches. The disc should play with no audible noise. The label is bright, clean and unmarked.</span><br /><br /><span>EX(EXCELLENT):</span><br /><span>Disc plays near perfectly, but may have minor paper scuffs that do not interfere with the sound quality. There can possibly be a hairline scratch or two but nothing that is obvious or affects play. Vinyl is bright and shiny; label is clean and unmarked.</span><br /><br /><span>VG+(VERY GOOD PLUS):</span><br /><span>Some visible surface wear, very minor scratches and scuffs, but minimal impact on the sound quality. Vinyl will still have good luster; labels may have minor imperfections (small labels or initials, etc.) but otherwise clean. Very minor surface noise if any.</span><br /><br /><span>VG(VERY GOOD):</span><br /><span>Vinyl will have noticeable scratches or scuffs that cause minor surface noise, but do not overpower the music. There will be no skips. Vinyl may appear somewhat dull and grayish. Labels may have small tears, tape marks, larger writing, etc. but still easily legible. Sleeve some ageing or sign of usage. There may be wear or deformation of the spindle hole.</span><br /><br /><span>G(GOOD):</span><br /><span>Well-played, dull, grayish vinyl with deeper scratches and wear causing distracting surface noise (hisses, pops, cracks and other nasties). The record will still play through without any skips. Labels may be significantly defaced or damaged.</span><br /><br /><span>F(FAIR) / P(POOR):</span><br /><span>Unless the record is particularly rare, I would not try to sell a record in this condition. There will be major noise, surface damage, deep scratches, and skips. Attempting to listen to these discs will be painful. These discs are basically trash unless a collector desires one to fill a space in a collection until a better one comes along.</span></p>
          </div>
        </Grid.Column>
        <Grid.Column width={5}>
          <ItemSidebar ref={contextRef}/>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ItemDescription
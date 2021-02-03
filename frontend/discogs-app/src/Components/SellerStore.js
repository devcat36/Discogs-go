import React from "react";
import {Input, Icon, Modal, Divider} from "semantic-ui-react";
import {Link} from "react-router-dom";

import Marketplace from "./Marketplace";

const dummyTerms =
  (<>
    <p>Hello everybody &amp; welcome to Don.Giovanni :)<br /><br />These are my 5 Terms &amp; Conditions. If you don't agree, please don't buy from me and demand that i do things your way, because i won't [/b]<br /><br />1. I work a 9-6 job and Discogs is only a hobby. I do NOT process, pack or ship orders every day of the week, because i am not a record shop. I process, communicate, pack and ship records whenever i have free time. This could be few times during the week or as low as twice.<br /><br />2. If you need something urgently or fast, plase message me to ask me when i am shipping next. Don't place an order and demand that i ''ship fast'' or same day, because that might not be possible and you will be dissapointed. I am doing all the work myself and i will endeavour to be as quick as possible, given how busy i am the day or week you ordered.<br /><br />3. Five days are more than enough to complete payment, after that the order will be cancelled by Discogs. But if you need more time simply contact me.<br /><br />4.&nbsp;<strong>Legal Disclaimer &amp; Refund Policy: I will honour every request for refund, but ONLY &amp; Strictly a full refund, upon buyer returning the record / records. NO PARTIAL REFUNDS!</strong><br /><br />5. I do not give negative feedbacks to members of the community. Not even to the aggresive and pittiful user who gave me a negative. I do this, because i don't believe in negativity and i believe that it doesn't help neither the buyer or the seller. I am a positive person and i am known to be helpful and collaborative.<br /><br />Items Ship From: United Kingdom<br /><br />Payment Methods: Only PayPal<br /><br />London costumers can pick up orders costing above 20&pound; (not less!). Most people don't actually turn up and ask to re-arrange, so i only give 1 chance to collect.<br /><br />*****************************<br />About Grading:<br /><br />My grading is done both visually &amp; by playing the record. If a record has some light scuffs, mostly from the inner sleeve or light hairlines which do not affect the sound, then i rate it as NM and i mention those makes CLEARLY in the comments for buyer to read. Few light marks, dust or fingertips which have no effect on the sound will not be graded as VG+, please keep in mind i am not up for any drama over few scuffs.<br /><br />Due to the lack of description between NM and VG+, people in Discogs and eBay have been using ''EX'' or ''Excellent''. This means that the record is a bit less than Near Mint, but certainly higher than VG+.<br /><br />Also, please keep in my that it is the responsibility of the buyer to dust &amp; clean the records. Grading-wise: PR - Promo copy, WL - White Label, TP: Test Pressing<br /><br />All orders above 12&pound; will need to be sent with Tracked &amp; Signed Delivery to avoid situations &amp; problems with damaged &amp; lost parcels. If you do not want this i can ship normally but please keep in mind that this is 100% your responsibility and risk.<br /><br />*****************************<br /><br />Please note: +++Payment is to be made within 5 days or the order will be cancelled+++<br /><br />Shipping Policies (Updated as of 1st of April 2020):<br /><br />2nd Class Delivery for UK Orders below &pound;12 (unless instructed otherwise)<br /><br />2nd Class Postage for all orders below &pound;12:<br /><br />1 x LP/12" &pound;4.10<br />2 x LP/12" &pound;4.95<br />3 x LP/12'' &pound;5.80<br />4 x LP/12'' &pound;6.65<br /><br />2nd Class Signed For Postage for all orders above &pound;12:<br /><br />1 x LP/12" &pound;5.40<br />2 x LP/12" &pound;6.25<br />3 x LP/12'' &pound;7.10<br />4 x LP/12'' &pound;7.95<br /><br />Will quote for more - usually after a certain amount (8-10) of records i can post via Courier for cheaper.<br /><br />All orders below &pound;15 will be send using Standard, non-Tracked Postage. If you require Tracked &amp; Insured delivery please let me know<br /><br />For European Orders up to &pound;15 - 1 x 12" is &pound;8.75 - Standard Shipping, No Tracking &amp; No Insurance<br /><br />For European Orders costing &pound;15 to &pound;50 - 1 x 12" is &pound;14.95 - Tracked &amp; Signed Shipping, with Insurance<br /><br />For European Orders costing &pound;50 or more - 1 x 12" is &pound;16.95 - Tracked &amp; Signed Shipping, with Extra Insurance<br /><br />&amp; Worldwide Orders first 12" is &pound;11.95 (add &pound;8 for Tracked &amp; Insured Delivery up to &pound;50 / add 10.50 &pound; for Tracked &amp; Insured Delivery up to &pound;100 to 250) **** PLEASE NOTE***** All parcels to South America, The Middle East, Russia and Africa will have to be sent as Singed &amp; Tracked service to avoid issues with lost and stolen parcels, which have - unfortunately - been very common. No shipping to Brazil, Mexico &amp; South Africa, too many lost parcels, too much stress.<br /><br />All prices include a little extra amount for packing, handling, mailers, stiffeners and other charges.<br /><br />I will calculate Postage by the weight of the Record &amp; Packaging for larger Orders and invoice accordingly .<br /><br />Shipping is every Monday &amp; Friday and sometimes when i am not working midweek.<br /><br />If records are damaged this is down to the post Office and the vinyl must have been damaged in transit.</p>
  </>);

function SellerStore() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="SellerStore">
      <div className="top">
        <div className="topBar"/>
        <div className="topBarContainer">
          <img alt=""
               src={'https://img.discogs.com/IBop_RG2_xtRMLY7P_X0sPetHsM=/300x300/filters:strip_icc():format(jpeg):quality(40)/discogs-avatars/U-5602215-1559342648.jpeg.jpg'}/>
          <div className="storeName"><h2>Kmria-Records</h2>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              trigger={<Link>Seller Terms</Link>}
            >
              <Modal.Header>Seller Terms</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <b>Accepted Payment Methods:</b> PayPal, Credit Card
                </Modal.Description>
              </Modal.Content>
              <Divider/>
              <Modal.Content>
                <Modal.Description>
                  <b>Automatic Cancellation Policy:</b> Orders will be cancelled if payment is not received within 8
                  days.
                </Modal.Description>
              </Modal.Content>
              <Divider/>
              <Modal.Content>
                <Modal.Description>
                  {dummyTerms}
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
          <div>Payment Methods:<br/><b>PayPal, Credit Card</b></div>
          <div>Ships From:<br/><b>United Kingdom</b></div>
          <Input inverted icon={<Icon name="search" color="grey" link/>} placeholder={'Search Kmria-Records\' store'}/>
        </div>
      </div>
      <div className="contained">
        <Marketplace/>
      </div>
    </div>
  );
}

export default SellerStore;
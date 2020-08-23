import React from "react";
import {Feed} from "semantic-ui-react";
import {Link} from "react-router-dom";

function OrderFeedItem({comment, feed}) {
  return (
    <Feed.Event icon={feed.icon} image={feed.image}>
      <Feed.Content>
        {comment ?
          <><Feed.Summary>{feed.user} <Feed.Date style={{fontSize: '1rem'}}>{feed.date}</Feed.Date></Feed.Summary>
            <Feed.Summary style={{fontWeight: 'normal'}}>
              {feed.content}<Feed.Date>{feed.datePassed}</Feed.Date>
            </Feed.Summary></> : <>
            <Feed.Date style={{fontSize: '1rem'}}>{feed.date}</Feed.Date>
            <Feed.Summary style={{fontWeight: 'normal'}}>
              {feed.content}
              <Feed.Date>{feed.datePassed}</Feed.Date>
            </Feed.Summary></>
        }
      </Feed.Content>
    </Feed.Event>
  );
}

export default OrderFeedItem;
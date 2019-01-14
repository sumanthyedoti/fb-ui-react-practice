import React, { Component } from 'react';
import Tester from './Tester';
import FeedItem from './feed-item/FeedItem'
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: 
      [
        {
          "post_by": "Page1",
          "item_description" : "This is a text only item",
          "image" : "",
          "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "likes" : 10,
          "comments" : 
            [
              {
                "comment" : "This is a comment",
                "created_at" : "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
              },
              {
                "comment" : "This is another comment",
                "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
              }
            ]
        },
        {
          "post_by": "Page2",
          "item_description" : "This is an item with an image",
          "image" : "/images/image.png",
          "likes" : 20,
          "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "comments" : 
            [
              {
                "comment" : "This is a comment",
                "created_at" : "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
              },
              {
                "comment" : "This is another comment",
                "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
              }
            ]
        }
      ],
    };
  }
  render() {

    return (
      <div className ='feed'>
        <Tester />
        <FeedItem />
      </div>
    );
  }
}

export default Feed;
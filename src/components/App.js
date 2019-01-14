import React, { Component } from 'react';
import Feed from './feed/Feed';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: 
      [
        {
          "post_id": 1,
          "post_by": "Page1",
          "item_description" : "This is a text only item",
          "images" : "",
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "likes" : 10,
          isLiked: false,
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
          "post_id": 2,
          "post_by": "Page2",
          "item_description" : "This is an item with an image",
          "images" : "/images/post1.jpg",
          "likes" : 20,
          isLiked: true,
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
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
    const {feedData} = this.state;
    return (
      <div className ='main'>
        <Feed 
          feedData = {feedData} 
        />
      </div>
    );
  }
}

export default App;

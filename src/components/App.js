import React, { Component } from 'react';
import Feed from './feed/Feed';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: 
      [
        {
          "post_id": 1,
          "post_by": "Developers Web",
          "item_description" : "Java is to JavaScript what car is to Carpet. 😋",
          "images" : "",
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "likes" : 10,
          "isLiked": false,
          "comments" : 
            [
              {
                "comment_id": 1,
                "commented_by": "Narendra Modi",
                "comment" : "Hahaha",
                "created_at" : "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
              },
              {
                "comment_id": 2,
                "commented_by": "O0ps Guy",
                "comment" : "Java is Love!!!!! <3",
                "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
              }
            ]
        },
        {
          "post_id": 2,
          "post_by": "Mind Core",
          "item_description" : "",
          "images" : "/images/post1.jpg",
          "likes" : 20,
          "isLiked": true,
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "comments" : 
            [
              {
                "comment_id": 1,
                "commented_by": "Sadguru",
                "comment" : "True",
                "created_at" : "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
              },
              {
                "comment_id": 2,
                "commented_by": "Suresh Raina",
                "comment" : "Awesome",
                "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
              }
            ]
        },
        {
          "post_id": 3,
          "post_by": "Mark Zukersberg",
          "item_description" : "",
          "images" : "/images/post4.jpg",
          "likes" : 142,
          "isLiked": true,
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "comments" : 
            [
              {
                "comment_id": 1,
                "commented_by": "Bill Gates",
                "comment" : "True for u. LOL 😂",
                "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
              }
            ]
        },
        {
          "post_id": 4,
          "post_by": "World Sites",
          "item_description" : "Valley of light, Italy",
          "images" : "/images/post9.jpg",
          "likes" : 67,
          "isLiked": false,
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "comments" : 
            [
              {
                "comment_id": 1,
                "commented_by": "Suresh Raina",
                "comment" : "Beautiful",
                "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
              }
            ]
        },
        {
          "post_id": 5,
          "post_by": "Steve Jobs",
          "item_description" : "Silicon World",
          "images" : "/images/post6.jpg",
          "likes" : 42,
          "isLiked": false,
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "comments" : 
            [
              {
                "comment_id": 1,
                "commented_by": "Programing Geek",
                "comment" : "Respect _/\\_",
                "created_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
              }
            ]
        },
        {
          "post_id": 6,
          "post_by": "Nature Love",
          "item_description" : "😢",
          "images" : "/images/post7.jpg",
          "likes" : 42,
          "isLiked": false,
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "comments" : 
            []
        },
        {
          "post_id": 7,
          "post_by": "Programing Geeks",
          "item_description" : "Algoithm:- A word used by programmers when they dont want to explain what they did..",
          "images" : "",
          "likes" : 24,
          "isLiked": true,
          "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
          "comments" : 
            []
        }
      ],
    };
  }
  render() {
    const {feedData} = this.state;
    return (
      <>
      <Header />
      <div className ='main'>
        <Feed 
          feedData = {feedData}
        />
      </div>
      </>
    );
  }
}

export default App;

import {FILTER_FEED_DATA, LIKE, COMMENT} from '../actions/types';

export const intialState = {
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
            "comment" : "Java is Love!!!!! ❤️",
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
    },
    {
      "post_id": 8,
      "post_by": "Movie Buzz",
      "item_description" : "C/o kancharapalem, cult movie with brilliant screenplay from telugu. Best regional film. Characters travel with us. Climax thrills...👏 👏 👏 👏",
      "images" : "/images/post10.jpg",
      "likes" : 54,
      "isLiked": true,
      "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
      "comments" : 
        []
    }
  ],
};

const filterState = {
  filteredFeedData: 
  [{
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
          "comment" : "Java is Love!!!!! ❤️",
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
  },
  {
    "post_id": 8,
    "post_by": "Movie Buzz",
    "item_description" : "C/o kancharapalem, cult movie with brilliant screenplay from telugu. Best regional film. Characters travel with us. Climax thrills...👏 👏 👏 👏",
    "images" : "/images/post10.jpg",
    "likes" : 54,
    "isLiked": true,
    "posted_at" : "Fri May 10 2018 15:23:36 GMT+0530 (IST)",
    "comments" : 
      []
  }]
}

export function filterReducer(state=filterState, {type, payload}) {
  switch(type){
    case FILTER_FEED_DATA:
      if(payload.filter==='image'){
        return {
          ...state,
          filteredFeedData : payload.posts.filter((item) => {
          return (item.images!=='' && item.item_description==='') 
          })
        }
      } else if(payload.filter==='text'){
        return {
          ...state,
          filteredFeedData : payload.posts.filter((item) => {
            return (item.item_description!=='' && item.images==='') 
          })
        }
      } else if(payload.filter==='both'){
        return {
          ...state,
          filteredFeedData : payload.posts.filter((item) => {
            return (item.item_description!=='' && item.images!=='') 
          })
        }
      }else if(payload.filter==='none'){
        return {
          ...state,
          filteredFeedData : []
        }
      } else if(payload.filter==='0'){
        return {
          ...state,
          filteredFeedData : payload.posts
        }
      }
      break;
    default: 
      return state;
  }
}

export function postReducer(state=intialState, {type, payload}) {
  switch(type){
    case LIKE: 
      let feedData = state.feedData.map((item) => {
      let itemNew = {...item};
      if(itemNew.isLiked && itemNew.post_id===payload) {
        itemNew.likes-=1;
        itemNew.isLiked = !itemNew.isLiked; 
      }else if(itemNew.post_id===payload){
        itemNew.likes+=1;
        itemNew.isLiked = !itemNew.isLiked;
      }
      return itemNew;
      });
      return {
        ...state,
        feedData,
        filteredFeedData: feedData,
      }
      case COMMENT: 
        feedData = state.feedData.map((item) => {
        if(item.post_id===Number(payload.id)) {
          item.comments.push({
            "comment_id": item.comments.length+1,
            "commented_by": "Yedoti Sumanth",
            "comment" : payload.value,
            "created_at" : new Date(),
          })
        }
        return item;
      });
      return {
        ...state,
        feedData,
        filteredFeedData: feedData,
      }
    default: 
      return state;
  }
}
import {FILTER_FEED_DATA, LIKE, COMMENT} from '../actions/types';

export function rootReducer(state, {type, payload}) {
  console.log(payload)
  switch(type){
    case FILTER_FEED_DATA:
      if(payload==='image'){
        return {
          ...state,
          filteredFeedData : state.feedData.filter((item) => {
          return (item.images!=='' && item.item_description==='') 
          })
        }
      } else if(payload==='text'){
        return {
          ...state,
          filteredFeedData : state.feedData.filter((item) => {
            return (item.item_description!=='' && item.images==='') 
          })
        }
      } else if(payload==='both'){
        return {
          ...state,
          filteredFeedData : state.feedData.filter((item) => {
            return (item.item_description!=='' && item.images!=='') 
          })
        }
      } else if(payload==='0'){
        return {
          ...state,
          filteredFeedData : state.feedData
        }
      }
      break;
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
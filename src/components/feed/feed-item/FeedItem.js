import React from 'react';
import Text from './Text'
import Images from './Images'
import Panel from './item-panel/Panel'
const FeedItem = props => {
  const { itemData, likeHandler, commentHandler} = props;
  const date = new Date(itemData.posted_at).toString();
  const dateStr = `${date.substring(0, 15)} at ${date.substring(16, 21)}`;
  return (
    <div className ='feed-item'>
      <p className = 'post-by'>{itemData.post_by}</p>
      <p className = 'posted-at'>{dateStr}</p>
      <Text text = {itemData.item_description} isOnlyText = {itemData.images.length===0} />
      <Images images = {itemData.images} />
      <Panel 
        post_id = {itemData.post_id}
        likes = {itemData.likes}
        isLiked = {itemData.isLiked}
        comments = {itemData.comments}
        likeHandler = {likeHandler}
        commentHandler = {commentHandler}
      />
    </div>
  );
}

export default FeedItem;
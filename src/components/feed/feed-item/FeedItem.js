import React from 'react';
import Panel from './item-panel/Panel'
const FeedItem = props => {
  const { itemData, likeHandler, commentHandler} = props;
  const date = new Date(itemData.posted_at).toString();
  const dateStr = `${date.substring(0, 15)} at ${date.substring(16, 21)}`;
  const commentsCount = itemData.comments.length;
  return (
    <div className ='feed-item'>
      <p className = 'post-by'>{itemData.post_by}</p>
      <p className = 'posted-at'>{dateStr}</p>
      {/**post text */}
      <p 
        className={ itemData.images.length===0 ? 'only-text item-text' : 'item-text'} 
      >
        { itemData.item_description }  
      </p>
      {/**post image */}
      <div>
        {itemData.images ? <img className='item-image' src={itemData.images} alt="post img" /> : null }
      </div>
      <div className = 'item-props'>
        <span className='likes'>{itemData.likes} likes</span>
        <span className='comments'>{commentsCount} {commentsCount===1 ? 'comment' : 'comments'}</span>
      </div>
      <Panel 
        post_id = {itemData.post_id}
        isLiked = {itemData.isLiked}
        comments = {itemData.comments}
        likeHandler = {likeHandler}
        commentHandler = {commentHandler}
      />
    </div>
  );
}

export default FeedItem;
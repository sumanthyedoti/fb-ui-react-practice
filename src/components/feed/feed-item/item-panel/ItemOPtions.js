import React from 'react';

const Options = (props) => {
  const {likeHandler, post_id, isLiked} = props;
  return (
    <div className = 'item-options'>
      <div 
        className={isLiked ? 'post-liked like-div' : 'like-div'} 
        onClick = {() => likeHandler(post_id)}>
        <img 
          className='like-img'
          src ={isLiked ? "./images/like.png" : "./images/unlike.png"} 
          alt=""
        /> Like
      </div>
      <div className='comment-div'>
      <img className='comment-img' src ="./images/comment.png" alt=""/> Comment
      </div>
      <div className='share-div'>
      <img className='share-img' src ="./images/share.png" alt=""/> Share
      </div>
    </div>
  );
}

export default Options;
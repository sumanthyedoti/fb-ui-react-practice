import React from 'react';
const Like = props => {
  const {likeHandler, post_id, isLiked} = props;
  return (
    <>
    <div 
      className={isLiked ? 'post-liked like-button' : 'like-button'} 
      onClick = {() => likeHandler(post_id)}>
      <img 
        className='like-img'
        src ={isLiked ? "./images/like.png" : "./images/unlike.png"} 
        alt=""
      /> Like
    </div>
    </>
  );
}

export default Like;
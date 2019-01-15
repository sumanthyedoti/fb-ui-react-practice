import React from 'react';

const Properties = (props) => {
  const {likes , commentsCount} = props;
  return (
    <div className = 'item-props'>
      <span className='likes'>{likes} likes</span>
      <span className='comments'>{commentsCount} {commentsCount===1 ? 'comment' : 'comments'}</span>
    </div>
  );
}

export default Properties;
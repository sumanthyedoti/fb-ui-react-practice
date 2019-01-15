import React from 'react';
const Like = props => {
  return (
    <>
    <div 
      className='comment-button' 
      onClick={() => props.displayComments()}
    >
      <img className='comment-img' src ="./images/comment.png" alt=""/> Comment
    </div>
    </>
  );
}

export default Like;
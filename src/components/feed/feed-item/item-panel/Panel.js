import React from 'react';
import Properties from './ItemProps';
import Options from './ItemOPtions';
const Panel = (props) => {
    const {likes , comments, likeHandler, commentHandler, post_id, isLiked} = props;
    return (
      <div>
        <Properties 
          likes = {likes}
          commentsCount = {comments.length}
        />
        <Options 
          post_id = {post_id}
          isLiked = {isLiked}
          likeHandler = {likeHandler}
          commentHandler = {commentHandler}
          comments = {comments}
        />
      </div>
    );
}

export default Panel;
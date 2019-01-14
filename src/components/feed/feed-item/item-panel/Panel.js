import React from 'react';
import Properties from './ItemProps';
import Options from './ItemOPtions';
const Panel = (props) => {
    const {likes , comments, likeHandler, post_id, isLiked} = props;
    return (
      <div>
        <Properties 
          likes = {likes}
          comments = {comments}
        />
        <Options 
          post_id = {post_id}
          isLiked = {isLiked}
          likeHandler = {likeHandler}
        />
      </div>
    );
}

export default Panel;
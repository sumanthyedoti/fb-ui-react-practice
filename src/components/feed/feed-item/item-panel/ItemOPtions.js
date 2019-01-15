import React, {Component} from 'react';
function Comments(props) {
  if (!props.displayComments) {
    return null;
  }
    const {comments} = props;
   const commentsList = comments.map((comment) => {
    const date = new Date(comment.created_at).toString();
    const dateStr = `${date.substring(0, 15)} at ${date.substring(16, 21)}`;
    return (
      <div className='comment' key={comment.comment_id}>
      <div className='comment-line'>
        <span className='commented-by'>{comment.commented_by} </span>
        <span className='comment-text'>{comment.comment}</span>
        </div>
        <p className='commented-at'>{dateStr}</p>
      </div>
    )
  });
  return (
      <>
      <input 
          type='text'
          className='comment-box'
          placeholder='Write a comment...'
          data-key = {props.post_id}
          onKeyUp= {props.commentHandler}
        />
      {commentsList}
      </>
    );
}
class Options extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayComments: false,
    }
  }
  displayComments(){
    this.setState((state, props) => ({
      displayComments: !state.displayComments,
    }));
  }
  render(){
    const {likeHandler, commentHandler, post_id, isLiked, comments} = this.props;
    return (
      <>
      <div className = 'item-options'>
        <div 
          className={isLiked ? 'post-liked like-button' : 'like-button'} 
          onClick = {() => likeHandler(post_id)}>
          <img 
            className='like-img'
            src ={isLiked ? "./images/like.png" : "./images/unlike.png"} 
            alt=""
          /> Like
        </div>
        <div className='comment-button' onClick={() => this.displayComments()}>
        <img className='comment-img' src ="./images/comment.png" alt=""/> Comment
        </div>
        <div className='share-button'>
        <img className='share-img' src ="./images/share.png" alt=""/> Share
        </div>
      </div>
      <div className='comments-div'>
        <Comments 
          displayComments= {this.state.displayComments} 
          comments = {comments} 
          commentHandler={commentHandler}
          post_id = {post_id}
        />
      </div>
      </>
    );
  }
}

export default Options;
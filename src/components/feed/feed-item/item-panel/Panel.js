import React, {Component} from 'react';
import Like from './Like';
import Comment from './Comment';
import Share from './Share';
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
class  Panel extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayComments: false,
    }
    this.displayComments = this.displayComments.bind(this);
  }
  displayComments(){
    this.setState((state, props) => ({
      displayComments: !state.displayComments,
    }));
  }
  render(){
    const {comments, likeHandler, commentHandler, post_id, isLiked} = this.props;
    return (
      <>
      <hr />
      <div className = 'item-options'>
        <Like 
          post_id = {post_id}
          isLiked = {isLiked}
          likeHandler = {likeHandler}
        />
        <Comment displayComments={this.displayComments}/>
        <Share />
      </div>
      {this.state.displayComments ? <hr/> : null}
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

export default Panel;
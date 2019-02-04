import React, { Component } from 'react';
import Tester from './Tester';
import FeedItem from './feed-item/FeedItem'
import {connect} from 'react-redux'
import {filterFeedAction, likeAction, commentAction} from '../../store/actions/actions';
class Feed extends Component {
  likeHandler = (postId) => {
    this.props.onLike(postId)
  }
  commentHandler = (e) => {
    if(e.keyCode===13) {
      this.props.onComment({id:e.target.dataset.key, value: e.target.value})
      e.target.value='';
    }
  }
  testerHandler=(e)=>{
    this.props.onFilterFeed(e.target.value);
  }
  render() {    
    // console.log(this.props);
    const feedData = this.props.feedData;
    const feedItems = feedData.map((item) => {
          return (
            <FeedItem 
              key = {item.post_id}
              itemData = { item }
              likeHandler = {this.likeHandler}
              commentHandler = {this.commentHandler}
            />
          );
    });
    
    return(
      <div className ='feed'>
        <Tester onChange={this.testerHandler}/>
        { feedItems }
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  console.log(state)
  return {
    feedData: state.filteredFeedData
  }
}
const mapActionsToProps=({
    onFilterFeed: filterFeedAction,
    onLike: likeAction,
    onComment: commentAction
})
export default connect(mapStateToProps, mapActionsToProps)(Feed);
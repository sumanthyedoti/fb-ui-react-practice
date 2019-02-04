import React, { Component } from 'react';
import Tester from './Tester';
import FeedItem from './feed-item/FeedItem'
import {connect} from 'react-redux'
import {filterFeedAction, likeAction, commentAction} from '../../store/actions/actions';
class Feed extends Component {
  likeHandler = (postId) => {
    const filter = document.getElementById('filter').value;
    this.props.onLike(postId)
    setTimeout(()=>{
      this.props.onFilterFeed({filter: filter, posts: this.props.feedData});
    },10)
  }
  commentHandler = (e) => {
    const filter = document.getElementById('filter').value;
    if(e.keyCode===13) {
      this.props.onComment({id:e.target.dataset.key, value: e.target.value})
      this.props.onFilterFeed({filter: filter, posts: this.props.feedData});
      e.target.value='';
    }
  }
  componentDidMount(){
    this.props.onFilterFeed({filter: '0', posts: this.props.feedData});
  }
  testerHandler=(e)=>{
    this.props.onFilterFeed({filter: e.target.value, posts: this.props.feedData});
  }
  render() {
    console.log(this.props);
    const feedData = this.props.filteredFeedData;
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
    filteredFeedData: state.filter.filteredFeedData,
    feedData: state.posts.feedData
  }
}
const mapActionsToProps=({
    onFilterFeed: filterFeedAction,
    onLike: likeAction,
    onComment: commentAction
})
export default connect(mapStateToProps, mapActionsToProps)(Feed);
import React, { Component } from 'react';
import Tester from './Tester';
import FeedItem from './feed-item/FeedItem'
class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedData : this.props.feedData,
    };
    this.likeHandler = this.likeHandler.bind(this);
    this.commentHandler = this.commentHandler.bind(this);
    this.testerHandler = this.testerHandler.bind(this);
  }
  likeHandler(post_id){
    let feedData = this.state.feedData.map((item) => {
      if(item.isLiked && item.post_id===post_id) {
        item.likes-=1;
        item.isLiked = !item.isLiked; 
      }else if(item.post_id===post_id){
        item.likes+=1;
        item.isLiked = !item.isLiked;
      }
      return item;
    });
    this.setState({
      feedData,
    })
  }
  commentHandler(e){
    if(e.keyCode===13) {
      const postId = Number(e.target.dataset.key);
      let feedData = this.state.feedData.map((item) => {
        if(item.post_id===postId) {
          item.comments.push({
            "comment_id": item.comments.length+1,
            "commented_by": "Yedoti Sumanth",
            "comment" : e.target.value,
            "created_at" : new Date(),
          })
        }
        return item;
      });
      this.setState({
        feedData,
      })
      e.target.value='';
    }
  }
  testerHandler(e){
    let feedData=[];
    if(e.target.value==='image'){
      feedData = this.props.feedData.filter((item) => {
        return (item.images!=='' && item.item_description==='') 
      });
    } else if(e.target.value==='text'){
      feedData = this.props.feedData.filter((item) => {
        return (item.item_description!=='' && item.images==='') 
      });
    } else if(e.target.value==='both'){
      feedData = this.props.feedData.filter((item) => {
        return (item.item_description!=='' && item.images!=='') 
      });
    } else if(e.target.value==='0'){
      feedData = this.props.feedData;
    }
    this.setState({
      feedData,
    })
  }
  render() {
    const { feedData } = this.state;
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
    
    return (
      <div className ='feed'>
        <Tester onChange={this.testerHandler}/>
        { feedItems }
      </div>
    );
  }
}

export default Feed;
import React, { Component } from 'react';
import Tester from './Tester';
import FeedItem from './feed-item/FeedItem'
class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedData : this.props.feedData,
    };
  }
  likeHandler = (postId) => {
    let feedData = this.state.feedData.map((item) => {
      let itemNew = {...item};
      if(itemNew.isLiked && itemNew.post_id===postId) {
        itemNew.likes-=1;
        itemNew.isLiked = !itemNew.isLiked; 
      }else if(itemNew.post_id===postId){
        console.log('ll');
        itemNew.likes+=1;
        itemNew.isLiked = !itemNew.isLiked;
      }
      return itemNew;
    });
    this.setState({
      feedData
    })
  }
  commentHandler = (e) => {
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
  componentWillReceiveProps(state, props){
    console.log(state)
    this.setState({
      feedData: state.feedData
    })
  }
  render() {
    const { feedData } = this.state;
    const { testerHandler} = this.props;
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
        <Tester onChange={testerHandler}/>
        { feedItems }
      </div>
    );
  }
}

export default Feed;
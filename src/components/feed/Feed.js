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
  render() {
    const { feedData } = this.state;
    const feedItems = feedData.map((item, index) => {
          return (
            <FeedItem 
              key = {index}
              itemData = { item }
              likeHandler = {this.likeHandler}
            />
          );

    });
    
    return (
      <div className ='feed'>
        <Tester />
        { feedItems }
      </div>
    );
  }
}

export default Feed;
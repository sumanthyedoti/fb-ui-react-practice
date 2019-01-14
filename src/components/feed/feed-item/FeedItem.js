import React, { Component } from 'react';
import Text from './Text'
import Images from './Images'
import Panel from './item-panel/Panel'
class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className ='feed-item'>
        <Text />
        <Images />
        <Panel />
      </div>
    );
  }
}

export default FeedItem;
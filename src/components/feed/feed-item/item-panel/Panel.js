import React, { Component } from 'react';
import Properties from './ItemProps';
import Options from './ItemOPtions';
class Panel extends Component {
  render() {
    return (
      <div>
        <Properties />
        <Options />
      </div>
    );
  }
}

export default Panel;
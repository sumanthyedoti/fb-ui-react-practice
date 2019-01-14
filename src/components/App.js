import React, { Component } from 'react';
import Feed from './feed/Feed';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className ='main'>
        <Feed />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Feed from './feed/Feed';
import Header from './Header';

class App extends Component{
  render() {
    return (
      <>
      <Header />
      <div className ='main'>
        <Feed />
      </div>
      </>
    );
  }
}

export default App;

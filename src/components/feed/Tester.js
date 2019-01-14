import React, { Component } from 'react';

class Tester extends Component {
  render() {
    return (
      <div className = 'tester'>
        <select name="cars">
          <option value="text">Text only</option>
          <option value="image">Images only</option>
          <option value="both">Text and Image</option>
          <option value="none">No Items</option>
        </select>
      </div>
    );
  }
}

export default Tester;
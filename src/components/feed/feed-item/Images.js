import React, { Component } from 'react';

class Images extends Component {
  render() {
    const { images } = this.props;
    return (
      <div>
        {images ? <img className='item-image' src={images} alt="post img" /> : null }
      </div>
    );
  }
}

export default Images;
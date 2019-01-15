import React from 'react';

const Text = (props) => {
    const { text, isOnlyText } = props;
    return (
        <p 
          className={ isOnlyText ? 'only-text item-text' : 'item-text'} 
        >{ text }</p>
    );
}

export default Text;
import React from 'react';

const Tester = props =>{
  return (
    <div className = 'tester'>
      <select name="cars" onChange={props.onChange}>
      <option value="0">select filter</option>
        <option value="text">Text only</option>
        <option value="image">Images only</option>
        <option value="both">Text and Image</option>
        <option value="none">No Items</option>
      </select>
    </div>
  );
}

export default Tester;
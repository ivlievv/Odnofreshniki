import React from 'react';

function Input (props) {

  console.log( props );

  return (

    <label>
      <div>Email:</div>
      <input type="text"/>
    </label>
  );

}

export default Input;
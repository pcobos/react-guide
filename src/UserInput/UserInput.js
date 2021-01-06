import React, { useState } from 'react';

const UserInput = (props) => {
  return (
    <div>
      <h1>This is my User Input component</h1>
      <input type="text" onChange={props.change} value={props.username}/>
    </div>
  )
};

export default UserInput;

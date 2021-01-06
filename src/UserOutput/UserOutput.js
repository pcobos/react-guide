import React, { useState } from 'react';

const UserOutput = (props) => {

  return(
    <div>
      <p>My name is {props.username}</p>
      <p>This is my {props.username}</p>
    </div>
  )
};

export default UserOutput;
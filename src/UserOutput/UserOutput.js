import React, { useState } from 'react';

const UserOutput = (props) => {

  return(
    <div>
      <p>My name is {props.username}</p>
      <p>And I can {props.superpower}</p>
    </div>
  )
};

export default UserOutput;
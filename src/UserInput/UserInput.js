import React, { useState } from 'react';

const UserInput = (props) => {

  const styles = {
      width: '100%',
      padding: "12px 20px",
      margin: "8px 0px",
  };

  return (
    

    <div>
      <h1>This is my User Input component</h1>
      <input style={styles} type="text" onChange={props.change} value={props.username} />
    </div>
  )
};

export default UserInput;

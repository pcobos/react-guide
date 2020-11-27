import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
      {/* children property is a reserved word for displaying the stuff inside the element tags when calling our component on the App class */}
      <p>{props.children}</p>
      {/* We will insert an input field to demonstrate how two way binding works */}
      <input onChange={}/>
    </div>
    )
  };

export default person;
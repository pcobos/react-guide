import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    // Remember to assign the className to the component
    <div className="Person">
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
      {/* children property is a reserved word for displaying the stuff inside the element tags when calling our component on the App class */}
      <p>{props.children}</p>
      {/* We will insert an input field to demonstrate how two way binding works */}
      <input type="text" onChange={props.changed}/>
    </div>
    )
  };

export default person;
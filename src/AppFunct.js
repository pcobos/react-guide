// Notice how the APP class inherits from the COMPONENT Class, imported from the react library
import React, { useState } from 'react';
import './App.css';
// import person from './Person/Person.js';

// In the following line are importing a component
import Person from './Person/Person.js';

// ------ Functional Component using hooks -----------

const app = (props) => {
  const [personsState, setPersonsState] =  useState({
    persons: [
      {name: "Gargamel", age:98},
      {name: "Pitufina", age:65},
      {name: "Pitufo Payaso", age:45}
    ],
  });

  // we could also use "useState" again to set another state instead of manually adding it to the new state.

  const [otherState, setOtherState] = useState({
    showPersons: false
  });
 

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: "Papa pitufo", age:98},
        {name: newName, age:65},
        {name: "Pitufo Payaso", age:45}
      ]
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = otherState.showPersons;
    setOtherState({
      showPersons: !doesShow
    });
  }

  return (
    // THis looks by HTML but it is actually JSX
    <div className="App">
      <h1>Obaaaa</h1>
      <h2>This is really working</h2>
      {/* On the following component we added an event listener (onClick). Notice that the syntax for JSX is different to normal JS (onclick). Once we declared the event, we assign as a Value the code that we want to be executed (eventName={codetobeexecuted}) */}
      <button onClick={togglePersonsHandler}>Switch name</button>
      {/*First three components are built using state. When state changes, it will prompt the DOM to rerender the component */}

      {personsState.persons.map(person => {
        return <Person 
          name={person.name}
          age={person.age}
          />
      })}
      
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        click={switchNameHandler.bind(this, "Yo mama")} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      {/* Following two components are built using props, props normally come from outside, similar to function arguments */}
      {otherState.showPersons &&
        <div>
          <Person name="Andres" age="37" />
          <Person name="Isabela" age="36" >This if the stuff displayed by props.children </Person>
        </div>
      }
    </div>
  );
    // return React.createElement('div', null, 'h1', 'I\'m the best')
};

export default app;
// Notice how the APP class inherits from the COMPONENT Class, imported from the react library
import React, { Component } from 'react';
import './App.css';

// In the following line are importing a component
import Person from './Person/Person.js';

// This is the single component being rendered on index.js. All of the other components we will use go inside this one.
class App extends Component {
  // State - reserved KW. State refers to stuff inside the component unlike props which normally come from outside. It is normally used only on class based components
  state = {
    persons: [
      { name: "Pedro", age: 35 },
      { name: "Thalia", age: 32 },
      { name: "Gaby", age: 36 }
    ]
  }
  // This class (APP) has one method, the render one. Super Important, react will call this method to render something to the screen
  render() {
    // Important to remember that something always (HTML) needs to be rendered to the screen.
    return (
      // THis looks by HTML but it is actually JSX
      <div className="App">
        <h1>Obaaaa</h1>
        {/*First three components are built using state. When state changes, it will prompt the DOM to rerender the component */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        {/* Following two components are built using props, props normally come from outside, similar to function arguments */}
        <Person name="Andres" age="37" />
        <Person name="Isabela" age="36" >This if the stuff displayed by props.children </Person>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'I\'m the best')
  }
}

// This class is then exported to the index.js file, which renders it
export default App;

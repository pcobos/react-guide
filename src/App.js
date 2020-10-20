// Notice how the APP class inherits from the COMPONENT Class, imported from the react library
import React, { Component } from 'react';
import './App.css';

// This is the single component being rendered on index.js. All of the other components we will use go inside this one.
class App extends Component {
  // This class (APP) has one method, the render one. Super Important, react will call this method to render something to the screen
  render() {
    // Important to remember that something always (HTML) needs to be rendered to the screen.
    return (
      // THis looks by HTML but it is actually JSX
      <div className="App">
        <h1>Obaaaa</h1>
      </div>
    );
  }
}

// This class is then exported to the index.js file, which renders it
export default App;

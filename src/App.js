// Notice how the APP class inherits from the COMPONENT Class, imported from the react library
import React, {Component} from 'react';
import './App.css';
import person from './Person/Person.js';

// In the following line are importing a component
import Person from './Person/Person.js';

// This is the single component being rendered on index.js. All of the other components we will use go inside this one.
          
// ------ Functional Component using hooks -----------

// const app = (props) => {
//   const [personsState, setPersonsState] =  useState({
//     persons: [
//       {name: "Gargamel", age:98},
//       {name: "Pitufina", age:65},
//       {name: "Pitufo Payaso", age:45}
//     ],
//   });

//     // we could also use "useState" again to set another state instead of manually adding it to the new state.

//   const [otherState, setOtherState] = useState('Some other value');
 
//   console.log(personsState, otherState);

//   const switchNameHandler = (newName) => {
//     setPersonsState({
//       persons: [
//         {name: "Papa pitufo", age:98},
//         {name: newName, age:65},
//         {name: "Pitufo Payaso", age:45}
//       ]
//     });
//   };

//   return (
//     // THis looks by HTML but it is actually JSX
//     <div className="App">
//       <h1>Obaaaa</h1>
//       <h2>This is really working</h2>
//       {/* On the following component we added an event listener (onClick). Notice that the syntax for JSX is different to normal JS (onclick). Once we declared the event, we assign as a Value the code that we want to be executed (eventName={codetobeexecuted}) */}
//       <button onClick={switchNameHandler.bind(this, 'Pedropolis')}>Switch name</button>
//       {/*First three components are built using state. When state changes, it will prompt the DOM to rerender the component */}
//       <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age}
//         click={switchNameHandler.bind(this, "Yo mama")} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       {/* Following two components are built using props, props normally come from outside, similar to function arguments */}
//       <Person name="Andres" age="37" />
//       <Person name="Isabela" age="36" >This if the stuff displayed by props.children </Person>
//     </div>
//   );
//     // return React.createElement('div', null, 'h1', 'I\'m the best')
// }

// ----------------------- Class Based Component --------

class App extends Component { 

// State - reserved KeyWord. State refers to stuff inside the component unlike props which normally come from outside. It is normally used only on class based components

// State is not used in functional components, following lines belong to the class component
  
  state = {
    persons: [
        { name: "Pedro", age: 35 },
        { name: "Thalia", age: 32 },
        { name: "Gaby", age: 36 }
      ]
    }
    
    // By convention, is better to use the word Handler when declaring event handler functions (this functions are not tipically called but rather assigned)
    
  switchNameHandler = () => {
    // Following method (setState) is a special one provided by react to update the "state" object. Notice that it will only update the stuff included inside, it will not touch the rest of the stuff in state (it simply merges it).
    this.setState({
      persons: [
          { name: "Pedro the immortal", age: 1000 },
          { name: "Thaliooo", age: 32 },
          { name: "Gaby", age: 36 }
        ]
      }
    )
  }
    
  changedNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Pedro the immortal", age: 1000 },
        { name: event.target.value, age: 32 },
        { name: "Gaby", age: 36 }
      ]
      }
    )
  }
  
    
      // This class (APP) has one method, the render one. Super Important, react will call this method render something to the screen
    // Important to remember that something always (HTML) needs to be rendered to the screen.

  render() { 
    return(
      <div className="App">
        <h1>Obaaaa</h1>
        <h2>This is really working</h2>
        {/* On the following component we added an event listener (onClick). Notice that the syntax for JSX is different to normal JS (onclick). Once we declared the event, we assign as a Value the code that we want to be executed (eventName={codetobeexecuted}) */}
        <button onClick={this.switchNameHandler}>Switch name</button>
        {/*First three components are built using state. When state changes, it will prompt the DOM to rerender the component */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.changedNameHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        {/* Following two components are built using props, props normally come from outside, similar to function arguments */}
        <Person name="Andres" age="37" />
        <Person name="Isabela" age="36" >This if the stuff displayed by props.children </Person>
      </div>
    );
  }
};

// This class is then exported to the index.js file, which renders it
export default App;

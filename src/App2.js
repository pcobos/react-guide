import React, {Component} from 'react';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App2 extends Component {
  state = {
    superheroes: [
      {username: "Pedro", superpower: "healing factor"},
      {username: "Agathe", superpower: "Super speed"},
      {username: "Sofia", superpower: "Invisibility"}
    ]
  }

  switchSuperpowerHandler = () => {
    this.setState({
      superheroes: [
        {username: "Pedro", superpower: "healing factor"},
        {username: "Agathe", superpower: "Super speed"},
        {username: "Sofia", superpower: "Invisibility"}
      ]
    }) 
  }

  render(){
    return(
      <div>
        <UserInput change={this.switchSuperpowerHandler}/>
        <UserOutput username={this.state.superheroes[0].username} superpower={this.state.superheroes[0].superpower}/>
        <UserOutput username={this.state.superheroes[1].username} superpower={this.state.superheroes[1].superpower}/>
        <UserOutput username={this.state.superheroes[2].username} superpower={this.state.superheroes[2].superpower}/>
      </div>
    )
  }
};

export default App2;
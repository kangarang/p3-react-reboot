import React, { Component } from 'react';
import Board from './Board.js'
import './App.css';

class App extends Component {

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h2>BOMBERPERSON Coming Soon!</h2>
        </div>
        <Board />
      </div>
    )
  }

}


export default App;
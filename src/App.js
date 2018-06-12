import React, { Component } from 'react';
//import logo from './logo.svg';
import Q1 from './Q1'
import Q2 from './Q2'
import Q3 from './Q3'
import './App.css';
import 'tachyons';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">ZTM Coding Challenge 6</h1>
        </header>
        <Q1 />
        <Q2 />
        <Q3 />
      </div>
    );
  }
}

export default App;

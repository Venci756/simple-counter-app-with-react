import React, { Component } from 'react';
import FirstComponent from './Components/learning-examples/FirstComponent';
import SecondComponent from './Components/learning-examples/SecondComponent';
import ThirdComponent from './Components/learning-examples/ThirdComponent';
import Counter from './Components/Counter/Counter';
import SingleCounter from './Components/SingleCounter/SingleCounter';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    //let style = { backgroundColor: "lightBlue" };
    return (
      <div className="App" >
        <Counter />
        <br></br>
        <SingleCounter by={1}></SingleCounter>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponent" style="{style}">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent />
      </div>
    );
  }
}
export default App;

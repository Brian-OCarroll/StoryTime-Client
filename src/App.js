import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import MainPage from './containers/main'
import LandingPage from './components/landingPage.js';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080')
class App extends Component {
  // constructor() {
  //   super();

  // }
  render() {
    return (

      <div className="App">
      
        <Route exact={true} path="/" render={(props) => <LandingPage {...props} socket={socket} />}/>
        <Route   path="/home" render={(props) => <MainPage {...props} socket={socket} />} />
       
      </div>
    );
  }
}

export default App;

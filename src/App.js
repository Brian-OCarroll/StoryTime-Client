import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import MainPage from './components/main'
import LandingPage from './components/landingPage.js'
class App extends Component {
  render() {
    return (

      <div className="App">
      
        <Route exact={true} path="/" component={LandingPage} />
        <Route   path="/home" component={MainPage} />
       
      </div>
    );
  }
}

export default App;

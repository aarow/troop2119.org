import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <div className='welcome-message'>
          <h1>Troop 2119</h1>
          <h2>
            Please visit us on Facebook
            <br /> while we work on our new web site.
            <br />
            <br />
            <a href='https://www.facebook.com/groups/troop2119/'>
              Troop 2119 Facebook Group
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

export default App;

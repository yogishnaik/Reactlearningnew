import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import Nav from './nav';
import Userlist from './users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Nav />
<Userlist />
      </div>
    );
  }
}

export default App;

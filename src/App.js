import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

class  App extends Component {

  state = {

  }

  render() {return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome</h1>
        <h2>Ramon Medina</h2>
        <h3>Software Engineer</h3>
      </header>
    </div>
  )}

}

export default App;

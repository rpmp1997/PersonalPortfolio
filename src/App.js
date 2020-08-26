import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layout/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/user/Home';
import Skills from './components/pages/user/Skills';
import Experience from './components/pages/user/Experience';

class  App extends Component {

  state = {

  }

  render() {return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/skills' component={Skills} />
          <Route path='/experience' component={Experience} />
        </Switch>
      </header>
    </div>
  )}

}

export default App;

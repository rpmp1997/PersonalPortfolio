import React, { Component } from 'react'
import BiographyLayout from '../../layout/BiographyLayout'
import './../../../App.css'

class Home extends Component {

    state = {
        parragraph: "A long parragraph about me"
    }
  
    render() {

        return (
            <div className="App">
                <header className="App-header">
                <h1>Welcome</h1>
                <h2>Ramon Medina</h2>
                <h3>Software Engineer</h3>
                <BiographyLayout  biography={this.state.parragraph}/>
                </header>
            </div>
    )}
  
  }
  
  export default Home;
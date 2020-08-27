import React, { Component } from 'react'
import ListElement from '../../layout/ListElement'

class Experience extends Component {
    state = {
        tempString: "A picture",
        tempString2: "Some description",
        tempString3: "Some details"
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Experience</h1>
                    <ListElement picture={this.state.tempString} description={this.state.tempString2} details={this.state.tempString3}/>
                </header>
            </div>
    )}
  
  }
  
  export default Experience;
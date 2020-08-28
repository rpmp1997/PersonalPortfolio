import React, { Component } from 'react'
import CollapsableSkills from '../../layout/CollapsableSkills'
import './../../../App.css'


class Skills extends Component {
    state = {
        text1: "Programming Languages",
        text2: "Python"
    }
  
    render() {
        return (
            <div className="container">
                <h1>A few of my skills</h1>
                <div className="skills-collapse-text">
                    <CollapsableSkills collapaseTitle={this.state.text1} collapseItem={this.state.text2}/>
                </div>
            </div>

    )}
  
  }
  
  export default Skills;
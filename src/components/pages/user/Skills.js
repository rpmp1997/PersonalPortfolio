import React, { Component } from 'react'
import CollapsableSkills from '../../layout/CollapsableSkills'
import './../../../App.css'


class Skills extends Component {
    state = {
        skillsArray: [
            {title: "Programming Languages", data: "Python\n C++\n Java"},
            {title: "Frameworks", data: "React\n Angular\n Vue"},
            {title: "Research Topics",data: "Natural Language Processing\n Mobile Security"}
        ],
        showSkills: true
    }
  
    render() {

        let skills = null;

        if(this.state.showSkills === true){
            skills = (
                <div>
                    {this.state.skillsArray.map(skill => {
                        return <CollapsableSkills collapseTitle={skill.title} collapseItem={skill.data} />
                    })}
                </div>
            )
        }


        return (
            <div className="container">
                <h1>A few of my skills</h1>
                <div className="skills-collapse-text">
                    {skills}
                </div>
            </div>

    )}
  
  }
  
  export default Skills;
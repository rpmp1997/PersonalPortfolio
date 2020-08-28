import React, { Component } from 'react'
import ListElement from '../../layout/ListElement'

class Experience extends Component {
    state = {
        experienceArray: [
            {picture: "Android", description: "Programming a lo in Android", details: "Spent 1 year"},
            {picture: "iOS", description: "Programming a lot in iOS", details: "Spent 1 year"},
            {picture: "Android", description: "Programming a lot in Android and Firebase", details: "Spent 2 year"},
            {picture: "Flutter", description: "Programming a lot in Flutter using visual studio code", details: "Spent 1 year"}
        ],
        showExperience: true
    }



    render() {

        //Renders a list dynamically by turning array into map for ListElement component
        let experiences = null;

        if(this.state.showExperience) {
            experiences = (
                <div>
                    {this.state.experienceArray.map(experience => {
                        return <ListElement picture={experience.picture} description={experience.description} details={experience.details}/>
                    })}
                </div>
            )
        }

        return (
            <div className="container">
                <h1>Experience</h1>
                {experiences}
            </div>
    )}
  
  }
  
  export default Experience;
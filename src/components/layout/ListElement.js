import React from 'react'
import './../../App.css';


const  ListElement = (props) => {
    
    return (
            <div class="container container-list-element">
                <div class="row row-list-element" >
                    <div class="col-md-3 col-list-element bg-dark text-white">
                        <p>{props.picture}</p>
                    </div>
                    <div class="col-md-6 col-list-element bg-dark text-white">
                        <p>{props.description}</p>
                    </div>
                    <div class="col-md-3 col-list-element bg-dark text-white">
                        <p>{props.details}</p>
                    </div>
                </div>
            </div>
    )
}

export default ListElement;
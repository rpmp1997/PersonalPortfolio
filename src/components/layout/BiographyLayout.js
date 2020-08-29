import React from 'react'

const BiographyLayout = (props) => {

    return(
    <div class="container">
        <div class="card bg-dark">
            <div class="card-body">
                {props.biography}
            </div>
        </div>
    </div>)
}

export default BiographyLayout;
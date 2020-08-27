import React from 'react'
import styles from './../../App.css';


const  ListElement = (props) => {
    
    return (
        <div class="container">
            <div class="card-group">
                <div class="card">
                    <div class="card-body bg-dark" style={styles.cardSizeArea}>
                        <p class="card-text">{props.picture}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body bg-dark " style={styles.cardSizeArea}>
                        <p class="card-text">{props.description}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body bg-dark" style={styles.cardSizeArea}>
                        <p class="card-text">{props.details}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListElement;
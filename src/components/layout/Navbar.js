import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-white" href="#">Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link text-white" href="#" to='/home'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white " href="#" to='/experience'>Experience</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" href="#" to='/skills'>Skills</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
import React, { Component } from 'react';
import '../assets/css/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg bg-bacteria shadow">
                <a className="navbar-brand" href="#0">
                    <img src="/images/bacteria.svg" width="30" height="30" className="d-inline-block" alt="" loading="lazy"></img> BIT
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#0">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
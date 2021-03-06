import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render() {
        return (
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">My Dogs</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Dog Page</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/list" className="nav-link">Saved Dogs</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav>
                    <div className="nav-wrapper #90caf9 blue lighten-3">
                        <p className="brand-logo float-left">Saaru Bhatia</p>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/">PortFolio</NavLink></li>
                            <li><NavLink to="/about">About Me</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
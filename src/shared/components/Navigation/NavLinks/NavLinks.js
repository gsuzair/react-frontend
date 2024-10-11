import React from "react";
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    One
                </NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">
                    Two
                </NavLink>
            </li>
            <li>
                <NavLink to="/place/new">
                    My Places
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth">
                    Authenticate
                </NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;
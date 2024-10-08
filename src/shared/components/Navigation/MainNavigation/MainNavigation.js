import React from "react";
import { Link } from 'react-router-dom';

import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";

const MainNavigation = props => {
    return (
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <h1 className="main_navigation__title">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Your Places</Link>
            </h1>
            <nav>
                <NavLinks />
            </nav>
        </MainHeader>
    )
}

export default MainNavigation;
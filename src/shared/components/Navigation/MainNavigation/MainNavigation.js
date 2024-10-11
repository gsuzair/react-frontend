import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../../UIElements/BackDrop";

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment>
            {drawerIsOpen ? <BackDrop onClick={closeDrawer} /> : null}
            {<SideDrawer show={drawerIsOpen}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>}
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className="main_navigation__title">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Your Places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;
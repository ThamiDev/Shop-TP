// == Import des librairies
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';

// == Import du style
import './header.scss';

// == Import des Composants
import Nav from '../Nav';

// == Composant
const Header = () => {

    // function qui active l'affiche du menu burger
    function openMenuNav() {
        document.querySelector(".navigation").style.display = "block";
        document.querySelector(".menu-navigation").style.color = "white";
        document.querySelector(".navigation").style.width = "20%";
        document.querySelector(".navigation").style.padding=  "1em 2em 2em 2em";
    }

    return (
        <header>
            <Nav />
            <div className="header">
                <div className="menu-navigation" onClick={openMenuNav}>
                    <FontAwesomeIcon icon={faBars} className="icon-item" />
                    <p>MENU</p>
                </div>
                <div className="logo-header">
                    <NavLink exact to="/" activeClassName="nav-active">
                        <h2>Mr.</h2>
                        <h2>B<span>a</span>r<span>a</span></h2>
                    </NavLink>
                </div>
                <div className="items-header">
                    <div className="item">
                        <NavLink exact to="/shop" activeClassName="nav-active">
                            <FontAwesomeIcon icon={faShoppingBag} className="icon-item" />
                            <div className="number-shop">
                                <p>0</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="item">
                        <NavLink exact to="/login" activeClassName="nav-active">
                            <FontAwesomeIcon icon={faUser} className="icon-item" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

// == Export
export default Header;
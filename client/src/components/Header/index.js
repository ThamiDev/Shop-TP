// == Import des librairies
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'
import './header.scss';

// == Composant
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="menu-navigation">
                    <FontAwesomeIcon icon={faBars} className="icon-item" />
                    <p>MENU</p>
                </div>
                <div className="logo-header">
                    <h2>Mr.</h2>
                    <h2>B<span>a</span>r<span>a</span></h2>
                </div>
                <div className="items-header">
                    <div className="item">
                        <FontAwesomeIcon icon={faShoppingBag} className="icon-item" />
                        <div className="number-shop">
                            <p>0</p>
                        </div>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faUser} className="icon-item" />
                    </div>
                </div>
            </div>
        </header>
    );
};

// == Export
export default Header;
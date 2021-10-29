// == Import des librairies
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTshirt, faMale, faFemale, faShoePrints, faUser, faPersonBooth, faHome, faSocks } from '@fortawesome/free-solid-svg-icons';

// == Import du style
import './nav.scss';

// == Composant
const Nav = () => {

    // function qui désactive l'affiche du menu burger
    function closeMenuNav() {
        document.querySelector(".menu-navigation").style.color = "black";
        document.querySelector(".navigation").style.width = "0%";
        document.querySelector(".navigation").style.padding = "0";
    }

    return (
        <div className="navigation">
            <div className="top-navigation">
                <div className="logo-header">
                    <h2>Mr.</h2>
                    <h2>B<span>a</span>r<span>a</span></h2>
                </div>
                <div onClick={closeMenuNav} className="menu-close">
                    <FontAwesomeIcon icon={faTimes} />
                    <p>CLOSE</p>
                </div>
            </div>
            <div className="middel-navigation">
                <ul>
                    <li className="item">
                        <NavLink exact to="/" activeClassName="nav-active">
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <h3>ACCEUIL</h3>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact to="/tshirt" activeClassName="nav-active">
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faTshirt} />
                            </div>
                            <h3>TSHIRT</h3>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact to="/pantalons" activeClassName="nav-active">
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faSocks} />
                            </div>
                            <h3>PANTALON</h3>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact to="/chaussures" activeClassName="nav-active">
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faShoePrints} />
                            </div>
                            <h3>CHAUSSURES</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bottom-navigation">
                <div className="profil">
                    <FontAwesomeIcon icon={faUser} />
                    <NavLink exact to="/login" activeClassName="nav-active">
                        <p>Profil</p>
                    </NavLink>
                </div>
                <div className="deconnexion">
                    <div className="icon-item">
                        <FontAwesomeIcon icon={faPersonBooth} />
                    </div>
                    <NavLink exact to="/login" activeClassName="nav-active">
                        <p>Connexion</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

// == Export
export default Nav;
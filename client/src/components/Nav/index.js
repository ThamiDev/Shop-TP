import React from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTshirt, faMale, faFemale, faShoePrints, faUser, faPersonBooth, faHome, faSocks } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    function closeMenuNav() {
        document.querySelector(".navigation").style.display = "none";
        document.querySelector(".menu-navigation").style.color = "black";
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
                    <p>Profil</p>
                </div>
                <div className="deconnexion">
                    <div className="icon-item">
                        <FontAwesomeIcon icon={faPersonBooth} />
                    </div>
                    <p>Deconnexion</p>
                </div>
            </div>
        </div>
    );
};

export default Nav;
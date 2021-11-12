// == Import des librairies
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faBars, faCog, faBan, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// == Import du style
import './header.scss';
import img from './pc.png';

// == Import des Composants
import Nav from '../Nav';

// == Composant
const Header = () => {

  // function qui active l'affiche du menu burger
  function openMenuNav() {
    document.querySelector(".navigation").style.display = "block";
    document.querySelector(".menu-navigation").style.color = "white";
    document.querySelector(".navigation").style.padding = "1em 2em 2em 2em";

    // condition pour rendre responsive la navigation (media screen)
    if (window.matchMedia("(min-width: 1400px)").matches) {
      document.querySelector(".navigation").style.width = "20%";

    } else if (window.matchMedia("(min-width: 1000px)").matches) {
      document.querySelector(".navigation").style.width = "30%";

    } else if (window.matchMedia("(min-width: 800px)").matches) {
      document.querySelector(".navigation").style.width = "40%";

    } else if (window.matchMedia("(min-width: 700px)").matches) {
      document.querySelector(".navigation").style.width = "50%";

    } else if (window.matchMedia("(min-width: 600px)").matches) {
      document.querySelector(".navigation").style.width = "60%";

    } else if (window.matchMedia("(min-width: 425px)").matches) {
      document.querySelector(".navigation").style.width = "80%";

    } else if (window.matchMedia("(min-width: 0px)").matches) {
      document.querySelector(".navigation").style.width = "80%";
    }
  }
  function Logout() {
    axios.get('http://localhost:3000/api/logout')
      .then(() => {
      }
      ).catch(error => console.log(error))
    localStorage.removeItem("token");
    window.location.reload();
  }
  const token = localStorage.getItem("token");


  return (
    <header>
      <Nav />
      <div className="header">
        <div className="menu-navigation" onClick={openMenuNav}>
          <FontAwesomeIcon icon={faBars} className="icon-item" />
          <p>MENU</p>
        </div>
        <div className="logo-header">
          <NavLink to="/">
            <h2>Mr.</h2>
            <h2>B<span>a</span>r<span>a</span></h2>
          </NavLink>
        </div>
        <div className="items-header">
        {token && jwt_decode(token).user.role == "1"
          ? (
          <div className="item">
            <NavLink to="/admin">
              <FontAwesomeIcon icon={faCog} className="icon-item" />
            </NavLink>
          </div>
          ) : (
            <div className="item"></div>
          )
        }
          <div className="item">
            <NavLink to="/shop">
              <FontAwesomeIcon icon={faShoppingBag} className="icon-item" />
              <div className="number-shop">
                <p>0</p>
              </div>
            </NavLink>
          </div>
          {!token
            ? (
              <div className="item">
                <NavLink to="/login">
                  <FontAwesomeIcon icon={faUser} className="icon-item" />
                </NavLink>
              </div>
            ) : (
              <div className="item">
                <NavLink to="/" onClick={Logout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon-item"/>
                </NavLink>
              </div>
            )}
        </div>
      </div>
    </header>
  );
};

// == Export
export default Header;

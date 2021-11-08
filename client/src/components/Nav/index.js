// == Import des librairies
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTshirt, faMale, faFemale, faShoePrints, faUser, faPersonBooth, faHome, faSocks } from '@fortawesome/free-solid-svg-icons';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

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
            <NavLink exact to="/bonnet" activeClassName="nav-active">
              <div className="icon-item">
                <FontAwesomeIcon icon={faSocks} />
              </div>
              <h3>BONNET</h3>
            </NavLink>
          </li>
          <li className="item">
            <NavLink exact to="/casquette" activeClassName="nav-active">
              <div className="icon-item">
                <FontAwesomeIcon icon={faTshirt} />
              </div>
              <h3>CASQUETTE</h3>
            </NavLink>
          </li>
          <li className="item">
            <NavLink exact to="/bob" activeClassName="nav-active">
              <div className="icon-item">
                <FontAwesomeIcon icon={faShoePrints} />
              </div>
              <h3>BOBS</h3>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bottom-navigation">
        <div className="profil">
          <FontAwesomeIcon icon={faUser} />
          {!token
            ? (
              <NavLink exact to="/login" activeClassName="nav-active">
                <p>Profil</p>
              </NavLink>
            ) : (
              <p>{jwt_decode(localStorage.getItem("token")).user.firstname} {jwt_decode(localStorage.getItem("token")).user.lastname}</p>
            )}
        </div>
        <div className="deconnexion">
          <div className="icon-item">
            <FontAwesomeIcon icon={faPersonBooth} />
          </div>
          {!token
            ? (
              <NavLink exact to="/login" >
                <p>Connexion</p>
              </NavLink>

            ) : (
              <NavLink exact to="/" onClick={Logout}>
                <p>Deconnexion</p>
              </NavLink>
            )}

        </div>
      </div>
    </div>
  );


};

// == Export
export default Nav;

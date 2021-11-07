// == Import des librairies
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// == Import du style
import './login.scss';
import img from './pcs.png';

// == Import des Composants
import Header from '../Header';

// == Composant
const Login = () => {
    return (
        <div>
            <Header />
            <div className="login">
                <img src={img} alt="background from" />

                <div className="form">
                    <h2>Connexion</h2>
                    <form action="" method="get">
                        <div class="input">
                            <label htmlFor="name">Email</label>
                            <input type="email" name="email" id="email" placeholder="entrez votre email" required />
                        </div>
                        <div class="input">
                            <label htmlFor="password">Mot de Passe</label>
                            <input type="text" name="password" id="password" placeholder="entrez votre mot de passe" required />
                        </div>
                        <div class="button">
                            <input className="btn" type="submit" value="Connexion" />
                        </div>
                    </form>


                    <div className="register">
                        <Link exact to="/register" >
                            <h3>où s'enregistrer</h3>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

// == Export
export default Login;

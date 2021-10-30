// == Import des librairies
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// == Import du style
import './register.scss';
import img from './pc.png';

// == Import des Composants
import Header from '../Header';

// == Composant
const Register = () => {
    return (
        <div>
            <Header />
            <div className="register">
                <img src={img} alt="background from" />

                <div className="form">
                    <h2>S'inscrire</h2>
                    <form action="" method="get">
                        <div class="input">
                            <label for="name">Prénom</label>
                            <input type="text" name="name" id="name" placeholder="entrez votre prénom" required />
                        </div>
                        <div class="input">
                            <label for="name">Email</label>
                            <input type="email" name="email" id="email" placeholder="entrez votre email" required />
                        </div>
                        <div class="input">
                            <label for="password">Mot de Passe</label>
                            <input type="text" name="password" id="password" placeholder="entrez votre mot de passe" required />
                        </div>
                        <div class="button">
                            <input className="btn" type="submit" value="S'inscrire" />
                        </div>
                    </form>

                    <div className="connexion">
                        <Link exact to="/login" >
                            <h3>où se connecter</h3>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

// == Export
export default Register;
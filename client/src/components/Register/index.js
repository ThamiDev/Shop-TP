// == Import des librairies
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// == Import du style
import './register.scss';
import img from './pc.png';

// == Import des Composants
import Header from '../Header';

// == Composant
const Register = () => {

  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(firstname, lastname, email, password);

  const formSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/register', {
      firstname,
      lastname,
      email,
      password
    }).then( (response) => {
      console.log(response)
      history.push('/login');
    })
    .catch( error => console.log(error))
  }

    return (
        <div>
            <Header />
            <div className="register">
                <img src={img} alt="background from" />

                <div className="form">
                    <h2>S'inscrire</h2>
                    <form method="post" onSubmit={formSubmit}>
                        <div className="input">
                            <label htmlFor="firstname">Prénom</label>
                            <input type="text" name="firstname" id="firstname" placeholder="entrez votre prénom" onChange={(event) => {setFirstname(event.target.value)}} required />
                        </div>
                        <div className="input">
                            <label htmlFor="lastname">Nom</label>
                            <input type="text" name="lastname" id="lastname" placeholder="entrez votre nom" onChange={(event) => {setLastname(event.target.value)}} required />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="entrez votre email" onChange={(event) => {setEmail(event.target.value)}} required />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Mot de Passe</label>
                            <input type="text" name="password" id="password" placeholder="entrez votre mot de passe" onChange={(event) => {setPassword(event.target.value)}} required />
                        </div>
                        <div className="button">
                            <input className="btn" type="submit" value="S'inscrire" />
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

// == Export
export default Register;

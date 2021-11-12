// == Import des librairies
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

// == Import du style
import './login.scss';
import img from './pcs.png';

// == Import des Composants
import Header from '../Header';

// == Composant
const Login = () => {

  const history = useHistory();
  // states pour récupérer la data du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/login', {
      email,
      password
    }).then( (response) => {
      console.log(response)
      if (!response.data.token) {
        setError(response.data.error);
        return;
      }
      localStorage.setItem("token", response.data.token);
      history.push('/');
      window.location.reload();
    })
    .catch( error => console.log(error))
  }

  return (
    <div>
      <Header />
      <div className="login">
        <img src={img} alt="background from" />

        <div className="form">
          <h2>Connexion</h2>
          <p>{error}</p>
          <form method="post" onSubmit={formSubmit}>
            <div className="input">
              <label htmlFor="name">Email</label>
              <input type="email" name="email" id="email" placeholder="entrez votre email" required onChange={(event) => {setEmail(event.target.value)}} />
            </div>
            <div className="input">
              <label htmlFor="password">Mot de Passe</label>
              <input type="password" name="password" id="password" placeholder="entrez votre mot de passe" required onChange={(event) => {setPassword(event.target.value)}} />
            </div>
            <div className="button">
              <input className="btn" type="submit" value="Connexion" />
            </div>
          </form>


          <div className="register">
            <Link to="/register" >
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

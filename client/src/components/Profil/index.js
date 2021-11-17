// == Import des librairies
import React, { useState, useEffect } from 'react';

// == Import des composants
import Header from '../Header';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

// == Import du style
import './profil.scss';

// == Composant
const Profil = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/orders/${jwt_decode(localStorage.getItem("token")).user.id}/user`)
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="profil">
        <div className="title-profil">
          <h2>Bienvenue sur votre profil {jwt_decode(localStorage.getItem("token")).user.firstname} {jwt_decode(localStorage.getItem("token")).user.lastname}</h2>
          <h3>Voici la liste de vos commandes</h3>
        </div>
        <div className="order-profil">

          {data.map((dt) => (
            <div className="order" key={dt.id}>
              <h2>Status : {dt.status}</h2>
              <div className="prd-order">

                {dt.product.map(prd => <p key={prd.id}>{prd.name}</p>)}
              </div>
              <h3>Réf: MRBARA00{dt.id}-{dt.user_id}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// == Export
export default Profil;

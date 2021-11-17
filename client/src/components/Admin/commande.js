// == Import des librairies
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { NavLink, Link } from 'react-router-dom';
import Creation from './creation';
import axios from 'axios';

// == Import du style
import "./admin.scss";

// == Composant
const Commande = () => {

  const [data, setData] = useState([]);

  function allOrder() {
    axios.get('http://localhost:3000/api/orders')
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error)
      });
  }

  function allOrderInProgress() {
    axios.get('http://localhost:3000/api/orders/0/status')
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error)
      });
  }

  function orderValid(id) {
    console.log(id)
    axios.patch(`http://localhost:3000/api/order/${id}`, {
      "status": "1",
    }).then((response) => {
      console.log(response)
      window.location.reload()
    })
      .catch(error => console.log(error))
  }

  return (
    <div className="commandes">
      <h3>Les commandes</h3>

      <div className="etat-commande">
        <div className="all">
          <p onClick={allOrder}>Toutes</p>
        </div>
        <div className="en-cours">
          <p onClick={allOrderInProgress}>En cours</p>
        </div>
      </div>
      <div className="container-commande">

        {data.map((dt) => (
          <div className="commande" key={dt.id}>
            <h2>Status : {dt.status}</h2>
            <div className="prd-order">

              {dt.product.map(prd => <p key={prd.id}>{prd.name}</p>)}
            </div>
            <h3>Réf: MRBARA00{dt.id}-{dt.user_id}</h3>
            {dt.status === "0"
              ? (
                <p className="valid-status" onClick={() => (orderValid(dt.id))}>valider</p>
              ) : (
                null
              )
            }
          </div>
        ))}

      </div>
    </div>
  );
};

// == export
export default Commande;

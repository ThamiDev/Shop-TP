// == Import des librairies
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { NavLink, Link } from 'react-router-dom';
import Creation from './creation';
import Commande from './commande';
import axios from 'axios';

// == Import du style
import "./admin.scss";
import img from './pc.png';

// == Composant
const Admin = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div className="admin">
      <div className="header">
        <h1>Administration</h1>
        <div className="logo-header">
          <NavLink to="/" activeClassName="nav-active">
            <h2>Mr.</h2>
            <h2>B<span>a</span>r<span>a</span></h2>
          </NavLink>
        </div>
      </div>

      <div className="stock">
        <h3>Mes articles en ligne</h3>

        <div className="articles">

          {data.map((dt) => (


            <div className="article" key={dt.id}>
              <img src={img} alt="image de l'article" />
              <Link to={`/modify/${dt.id}`}>
                <h4>{dt.name}</h4>
              </Link>
              <table>
                <tr>
                  <th>Prix</th>
                  <th>Stock</th>
                </tr>
                <tr>
                  <td>{dt.price}€</td>
                  <td>{dt.amount}</td>
                </tr>
              </table>
              <p className="reference"> Réf: HTR00001</p>
            </div>


          ))}
        </div>
      </div>

      <Commande />

      <Creation />
      
    </div>
  );
};

// == export
export default Admin;

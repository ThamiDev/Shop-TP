// == Import des librairies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// == Import du style
import './shop.scss';

// == Import des Composants
import Header from '../Header';
import Footer from '../Footer';
// == Composant
const Shop = () => {

  let keyPorductLocalStorage = JSON.parse(localStorage.getItem("produit"));
  console.log(keyPorductLocalStorage);

  function removeShop() {
    localStorage.removeItem("produit");
    window.location.reload();
  }

  return (
    <div>
      <Header />
      <div className="shop">
        <table>
          <thead>
            <tr>
              <th>ARTICLE</th>
              <th>QUANTITE</th>
              <th>SUPPR.</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {keyPorductLocalStorage === null
              ? (
                <tr>
                  <td>Votre panier est vide</td>
                </tr>
              ) : (
                keyPorductLocalStorage.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>1</td>
                    <td><FontAwesomeIcon icon={faTimes} className="icon-item" onClick={() => {
                      keyPorductLocalStorage = keyPorductLocalStorage.filter(
                        (el) => el.id !== product.id
                      )
                      localStorage.setItem("produit", JSON.stringify(keyPorductLocalStorage));
                      window.location.reload();
                    }} /></td>
                    <td>{product.price}€</td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
        <div className="total">
          <h2>TOTAL (Prix avec Taxe) <span>0.00€</span></h2>
        </div>
        <div className="valid">
          <Link to="/">
            <h2 className="close" onClick={removeShop}>FERMER <FontAwesomeIcon icon={faTimes} className="icon-item" /></h2>
          </Link>
          <h2><span>VALIDER VOTRE PANIER</span></h2>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Shop;

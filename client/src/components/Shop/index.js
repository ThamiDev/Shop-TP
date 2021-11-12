// == Import des librairies
import React from 'react';
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
  return (
    <div>
      <Header />
      <div className="shop">
        <table>
          <tbody>
            <tr>
              <th>ARTICLE</th>
              <th>QUANTITE</th>
              <th>SUPPR.</th>
              <th>TOTAL</th>
            </tr>
            <tr>
              <td>Tshirt Bleu</td>
              <td>1</td>
              <td><FontAwesomeIcon icon={faTimes} className="icon-item" /></td>
              <td>29.99€</td>
            </tr>
            <tr>
              <td>Jean Noir</td>
              <td>2</td>
              <td><FontAwesomeIcon icon={faTimes} className="icon-item" /></td>
              <td>54.99€</td>
            </tr>
            <tr>
              <td>Chaussures 43</td>
              <td>1</td>
              <td><FontAwesomeIcon icon={faTimes} className="icon-item" /></td>
              <td>100.99€</td>
            </tr>
          </tbody>
        </table>
        <div className="total">
          <h2>TOTAL (Prix avec Taxe) <span>124.99€</span></h2>
        </div>
        <div className="valid">
          <Link to="/">
            <h2 className="close">FERMER <FontAwesomeIcon icon={faTimes} className="icon-item" /></h2>
          </Link>
          <h2><span>VALIDER VOTRE PANIER</span></h2>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Shop;

// == Import des librairies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronRight, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import img from './px.jpg';

// == Import des composants
import Header from '../Header';

// == Import du style
import './item.scss';
import Footer from '../Footer';

// == Composant
const Item = () => {
    return (
        <div>
            <Header />
            <div className="article">
                <div className="left-item">
                    <img src={img} alt="image de l'article" />
                </div>
                <div className="right-item">
                    <h2>Casquette New Era</h2>
                    <p className="price">29.99€</p>
                    <p className="description">Casquette New Era nouvelle collection</p>
                    <p className="color-item">Rouge</p>
                    <div className="button-add">
                        <p>Ajouter au Panier</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// == Export
export default Item;

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
                    <h2>Veste de Costume</h2>
                    <p className="price">59.99€</p>
                    <p className="description">Une veste de costume bleu disponible sous plusieurs tailles</p>
                    <p className="color-item">Bleu</p>
                    <div className="size">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>XXL</p>
                    </div>
                    <p>taille: M</p>
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
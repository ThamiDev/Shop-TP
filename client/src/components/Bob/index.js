// == Import des librairies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import img from './pc.png'

// == Import du style
import './bob.scss';

// == Import des Composants
import Header from '../Header';
import Footer from '../Footer';
import News from '../News';

// == Composant
const Bob = () => {
    return (
        <div className="container-bob">
        <Header />
        <div className="bob-header">
            <div className="left-header">
                <div className="picture-slide">
                    <img src={img} alt="picture slide" />
                </div>
            </div>
            <div className="right-header">

                <div className="text-right-container">
                    <h1>Nouvelle Collection Bobs
                    </h1>
                    <p>Lorem ipsum dolar sit amet, consectetur adipis elit. Nunc imperdiet, nulla a scelerisque condimentum, enim mi blandit erat, at blandit.</p>
                    <div className="button-slide">
                        <h4>VIEW COLLECTION</h4>
                        <FontAwesomeIcon icon={faChevronCircleRight} className="icon-item" />
                    </div>
                </div>

            </div>
        </div>
        <News />
        <Footer />
    </div>
    );
};

// == Export
export default Bob;

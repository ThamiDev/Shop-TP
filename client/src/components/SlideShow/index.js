// == Import des librairies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronRight, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import img from './px.png';

// == Import du style
import './slideshow.scss';

// == Composant
const SlideShow = () => {
    return (
        <div className="slideShow">
            <div className="container-articles">
                <div className="left-container">

                    <div className="number-slide">
                        <h2>01</h2>
                    </div>
                    <div className="picture-slide">
                        <img src={img} alt="picture slide" />
                    </div>
                </div>
                <div className="right-container">

                    <div className="text-right-container">
                        <h1>Nouvelle Collection New Era
                        </h1>
                        <p>Bienvenue sur notre shop en ligne, nous proposons ici plusieurs modèles de casquette sous plusieurs marques.</p>
                        <div className="button-slide">
                            <h4>VIEW COLLECTION</h4>
                            <FontAwesomeIcon icon={faChevronCircleRight} className="icon-item" />
                        </div>
                    </div>
                    <div className="indicator-slide">
                        <FontAwesomeIcon icon={faCircle} className="icon-item" />
                        <FontAwesomeIcon icon={faCircle} className="icon-item" />
                        <FontAwesomeIcon icon={faCircle} className="icon-item" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// == Export
export default SlideShow;

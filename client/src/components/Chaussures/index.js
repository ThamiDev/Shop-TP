import React from 'react';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import img from './pc.png'
import './chaussures.scss';

const Chaussures = () => {
    return (
        <div className="container-chaussures">
        <Header />
        <div className="chaussures-header">
            <div className="left-header">
                <div className="picture-slide">
                    <img src={img} alt="picture slide" />
                </div>
            </div>
            <div className="right-header">

                <div className="text-right-container">
                    <h1>Collection de Chaussures</h1>
                    <p>Lorem ipsum dolar sit amet, consectetur adipis elit. Nunc imperdiet, nulla a scelerisque condimentum, enim mi blandit erat, at blandit.</p>
                    <div className="button-slide">
                        <h4>VIEW COLLECTION</h4>
                        <FontAwesomeIcon icon={faChevronCircleRight} className="icon-item" />
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Chaussures;
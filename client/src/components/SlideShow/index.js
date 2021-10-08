import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronRight, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import img from './px.png';
import './slideshow.scss';

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
                        <h1>Blousson Bleu Collection</h1>
                        <p>Lorem ipsum dolar sit amet, consectetur adipis elit. Nunc imperdiet, nulla a scelerisque condimentum, enim mi blandit erat, at blandit.</p>
                        <div className="button-slide">
                            <p>VIEW COLLECTION</p>
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

export default SlideShow;
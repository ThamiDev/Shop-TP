// == Import des librairies
import React from 'react';
import img from './robe.jpg';
import img1 from './robee.jpg';
import img2 from './veste.jpg';

// == Import du style
import './news.scss';

// == Composant
const News = () => {
    return (
        <div className="container-news">
            <div className="title-news">
                <h2>Nouveautés</h2>
                <p>Les nouveautés sont mises à l'honneur.</p>
            </div>
            <div className="products-news">
                <div className="product">
                    <img src={img} alt="description" />
                    <div className="description-product">
                        <h3>Robe jaune</h3>
                        <h4>29.99€</h4>
                        <div className="size-product">
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                            <p>XXL</p>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img src={img2} alt="description" />
                    <div className="description-product">
                        <h3>Veste costume</h3>
                        <h4>74.99€</h4>
                        <div className="size-product">
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                            <p>XXL</p>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img src={img1} alt="description" />
                    <div className="description-product">
                        <h3>Robe violette</h3>
                        <h4>39.99€</h4>
                        <div className="size-product">
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                            <p>XXL</p>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img src={img} alt="description" />
                    <div className="description-product">
                        <h3>Robe jaune</h3>
                        <h4>29.99€</h4>
                        <div className="size-product">
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                            <p>XXL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// == Export
export default News;
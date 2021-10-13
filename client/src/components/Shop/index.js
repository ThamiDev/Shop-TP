// == Import des librairies
import React from 'react';

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
            <h1>Shop</h1>
            <Footer />
        </div>
    );
};

// == Export
export default Shop;
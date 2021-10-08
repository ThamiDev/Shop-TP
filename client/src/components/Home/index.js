// == Import des librairies
import React from 'react';

// == Import des composants
import Header from '../Header';
import SlideShow from '../SlideShow';
import News from '../News';
import Footer from '../Footer';

// == Composant
const Home = () => {
    return (
        <div>
            <Header />
            <SlideShow />
            <News />
            <Footer />
        </div>
    );
};

// == Export
export default Home;
// == Import des librairies
import React, { useState, useEffect } from 'react';

// == Import des composants
import Header from '../Header';
import SlideShow from '../SlideShow';
import News from '../News';
import Footer from '../Footer';
import axios from 'axios';

// == Composant
const Home = () => {

  const [data, setData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:3000/api/products/1/category')
    .then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    });
  }, []);
    

  return (
    <div>
      <Header />
      <SlideShow />
      <News data={data} />
      <Footer />
    </div>
  );
};

// == Export
export default Home;

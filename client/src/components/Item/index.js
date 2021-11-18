// == Import des librairies
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronRight, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import img from './px.jpg';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// == Import des composants
import Header from '../Header';

// == Import du style
import './item.scss';
import Footer from '../Footer';

// == Composant
const Item = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error)
      });
  }, []);

  async function addProductShop(id) {

    await axios.get(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        console.log(response.data)

        let keyPorductLocalStorage = JSON.parse(localStorage.getItem("produit"));

        if(keyPorductLocalStorage){
          keyPorductLocalStorage = JSON.parse(localStorage.getItem("produit"));
          keyPorductLocalStorage.push(response.data);
          localStorage.setItem("produit", JSON.stringify(keyPorductLocalStorage));
        }
        else {
          keyPorductLocalStorage = [];
          keyPorductLocalStorage.push(response.data);
          localStorage.setItem("produit", JSON.stringify(keyPorductLocalStorage));
        }
        window.location.reload();

      }).catch((error) => {
        console.log(error)
      });

  };


  return (
    <div>
      <Header />

      <div className="article">
        <div className="left-item">
          <img src={img} alt="image de l'article" />
        </div>
        <div className="right-item">
          <h2>{data.name}</h2>
          <p className="price">{data.price}.00€</p>
          <p className="description">{data.description}</p>
          <p className="color-item">Rouge</p>
          <div className="button-add">
          <Link to="/shop">
            <p onClick={() => {
              addProductShop(data.id)
            }}>Ajouter au Panier</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// == Export
export default Item;

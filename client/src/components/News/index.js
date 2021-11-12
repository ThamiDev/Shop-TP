// == Import des librairies
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

// == Import du style
import './news.scss';
import img from './pc4.png';
import img1 from './pc3.jpg';
import img2 from './pc2.png';
import img3 from './pc.jpg';
import axios from 'axios';

// == Composant
const News = ({ data }) => {

  // const [keyId, setKeyId] = useState(0);
  // const [product, setproduct] = useState([]);

  //   function addProductShop() {

  //     axios.get(`http://localhost:3000/api/product/${keyId}`)
  //       .then((response) => {
  //         setproduct(response.data)
  //       }).catch((error) => {
  //         console.log(error)
  //       });
  //     console.log(product);

  //     localStorage.setItem("product", JSON.stringify(product))
  //   };

  console.log(data)

  return (
    <div className="container-news">
      <div className="title-news">
        <h2>Nouveautés</h2>
        <p>Les nouveautés sont mises à l'honneur.</p>
      </div>
      <div className="products-news">

        {data.map((dt) => (

    
          <div className="product" key={dt.id}>
            <img src={img} alt="description" />
            <div className="description-product">
              <h3>{dt.name}</h3>
              <h4>{dt.price}€</h4>
            </div>
            <div className="order">
              <div>
                <Link to="/article">
                  <button>
                    Voir le produit
              </button>
                </Link>
              </div>
              <div>
                <Link to="/shop">
                  <button>
                    Ajouter au panier
              </button>
                </Link>
              </div>
            </div>
          </div>

        ))}

      </div>
    </div>
  );
};

// == Export
export default News;

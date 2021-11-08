// == Import des librairies
import axios from 'axios';
import React, { useState } from 'react';

// == Import du style
import "./admin.scss";

// == Composant
const Creation = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [picture, setPicture] = useState("");
  const [category_id, setCategory_id] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/product', {
      name,
      description,
      price,
      amount,
      picture,
      category_id
    }).then((response) => {
      console.log(response)
    })
      .catch(error => console.log(error))
  }

  return (
    <div className="creation">
      <h3>Mettre en ligne un nouvel article</h3>
      <form method="post" onSubmit={formSubmit}>

        <div className="nom-article">
          <label htmlFor="name">Nom de l'article</label>
          <input type="text" name="name" id="name" placeholder="nom de l'article" className="input-text" onChange={(event) => { setName(event.target.value) }} />
        </div>

        <div className="description-article">
          <label htmlFor="description">Description de l'article</label>
          <input type="fild" name="description" id="description" placeholder="description" className="input-text" onChange={(event) => { setDescription(event.target.value) }} />
        </div>

        <div className="category-article">
          <label htmlFor="category">Catégorie de l'article</label>
          <input type="number" name="category" id="category" placeholder="quantite de l'article" className="input-text" onChange={(event) => { setCategory_id(event.target.value) }} />
        </div>

        <div className="prix-article">
          <label htmlFor="price">Prix de l'article</label>
          <input type="number" name="price" id="price" placeholder="prix de l'article" className="input-text" onChange={(event) => { setPrice(event.target.value) }} />
        </div>

        <div className="quantite-article">
          <label htmlFor="amount">Quantité de l'article</label>
          <input type="number" name="amount" id="amount" placeholder="quantite de l'article" className="input-text" onChange={(event) => { setAmount(event.target.value) }} />
        </div>

        <div>
          <label htmlFor="picture">Choisir la photo de l'article</label>
          <input type="file" id="picture" name="picture" accept="image/png, image/jpeg" placeholder="photo de l'article" onChange={(event) => { setPicture(event.target.value) }} />
        </div>

        <div className="button-submit">
          <input className="btn-input" type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
};

// == export
export default Creation;

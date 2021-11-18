import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronRight, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import img from './pc.png';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

// == Import des composants
import Header from '../Header';

// == Import du style
import './modify.scss';

// == Composant
const Modify = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [category_id, setCategory_id] = useState("");

  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  const history = useHistory();

  const formSubmit = (event) => {
    axios.patch(`http://localhost:3000/api/product/${id}`, {
      name,
      description,
      price,
      amount,
      category_id
    }).then((response) => {
      console.log(response)
    })
      .catch(error => console.log(error))
  }

  const deleteItem = () => {
    axios.delete(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        console.log(response)
        history.push('/admin');
      })
      .catch(error => console.log(error))
  }


  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="modify">
        <div className="left-modify">
          <img src={img} alt="image de l'article" />
        </div>
        <div className="right-modify">
          <h3>Modifier cet article</h3>

          <form method="patch" onSubmit={formSubmit}>
            <div className="nom-article">
              <label htmlFor="name">Nom de l'article</label>
              <input type="text" name="name" id="name" placeholder={data.name} className="input-text" onChange={(event) => { setName(event.target.value) }} />
            </div>

            <div className="description-article">
              <label htmlFor="description">Description de l'article</label>
              <input type="fild" name="description" id="description" placeholder={data.description} className="input-text" onChange={(event) => { setDescription(event.target.value) }} />
            </div>

            <div className="category-article">
              <label htmlFor="category">Catégorie de l'article</label>
              <input type="number" name="category" id="category" placeholder={data.category_id} className="input-text" onChange={(event) => { setCategory_id(event.target.value) }} />
            </div>

            <div className="prix-article">
              <label htmlFor="prix">Prix de l'article</label>
              <input type="number" name="prix" id="prix" placeholder={`${data.price}€`} className="input-text" onChange={(event) => { setPrice(event.target.value) }} />
            </div>

            <div className="quantite-article">
              <label htmlFor="amount">Quantité de l'article</label>
              <input type="number" name="amount" id="amount" placeholder={data.amount} className="input-text" onChange={(event) => { setAmount(event.target.value) }} />
            </div>

            <div className="button-submit">
              <input className="btn-input-enregistrer" type="submit" value="Enregistrer l'article" />
              <input className="btn-input-delete" type="submit" value="Supprimer l'article" onClick={deleteItem} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Modify;

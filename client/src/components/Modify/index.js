import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronRight, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import img from './pc.png';

// == Import des composants
import Header from '../Header';

// == Import du style
import './modify.scss';

// == Composant
const Modify = () => {
  return (
    <div>
      <Header />
      <div className="modify">
        <div className="left-modify">
          <img src={img} alt="image de l'article" />
        </div>
        <div className="right-modify">
          <h3>Modifier cet article</h3>
          <form>
            <div className="nom-article">
              <label for="name">Nom de l'article</label>
              <input type="text" name="name" id="name" placeholder="nom de l'article" className="input-text" />
            </div>

            <div className="description-article">
              <label for="description">Description de l'article</label>
              <input type="fild" name="description" id="description" placeholder="description" className="input-text" />
            </div>

            <div className="category-article">
              <label htmlFor="category">Catégorie de l'article</label>
              <input type="number" name="category" id="category" placeholder="quantite de l'article" className="input-text" onChange={(event) => { setCategory_id(event.target.value) }} />
            </div>

            <div className="prix-article">
              <label for="prix">Prix de l'article</label>
              <input type="number" name="prix" id="prix" placeholder="prix de l'article" className="input-text" />
            </div>

            <div className="quantite-article">
              <label htmlFor="amount">Quantité de l'article</label>
              <input type="number" name="amount" id="amount" placeholder="quantite de l'article" className="input-text" onChange={(event) => { setAmount(event.target.value) }} />
            </div>

            <div>
              <label for="picture">Choisir la photo de l'article</label>
              <input type="file" id="picture" name="picture" accept="image/png, image/jpeg" placeholder="photo de l'article" />
            </div>

            <div className="button-submit">
              <input className="btn-input" type="submit" value="Enregistrer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Modify;

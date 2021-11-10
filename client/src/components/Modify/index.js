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

                        <div className="ref-article">
                            <label for="ref">Réference de l'article</label>
                            <input type="text" name="ref" id="ref" placeholder="référence" className="input-text" />
                        </div>

                        <div className="nom-article">
                            <label for="name">Nom de l'article</label>
                            <input type="text" name="name" id="name" placeholder="nom de l'article" className="input-text" />
                        </div>

                        <div className="color-article">
                            <label for="color">Couleur de l'article</label>
                            <input type="text" name="color" id="color" placeholder="couleur" className="input-text" />
                        </div>

                        <div className="description-article">
                            <label for="description">Description de l'article</label>
                            <input type="fild" name="description" id="description" placeholder="description" className="input-text" />
                        </div>

                        <div className="prix-article">
                            <label for="prix">Prix de l'article</label>
                            <input type="number" name="prix" id="prix" placeholder="prix de l'article" className="input-text" />
                        </div>

                        <label>Tailles disponible</label>
                        <div className="sizes-input">
                            <input type="number" name="s" id="s" placeholder="S" className="size-input" />
                            <input type="number" name="m" id="m" placeholder="M" className="size-input" />
                            <input type="number" name="l" id="l" placeholder="L" className="size-input" />
                            <input type="number" name="xl" id="xl" placeholder="XL" className="size-input" />
                            <input type="number" name="xxl" id="xxl" placeholder="XXL" className="size-input" />
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

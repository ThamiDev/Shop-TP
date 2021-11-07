// == Import des librairies
import React from 'react';
import Header from '../Header';
import { NavLink, Link } from 'react-router-dom';

// == Import du style
import "./admin.scss";
import img from './pc.jpg';

// == Composant
const Admin = () => {

    return (
        <div className="admin">
            <div className="header">
                <h1>Administration</h1>
                <div className="logo-header">
                    <NavLink exact to="/" activeClassName="nav-active">
                        <h2>Mr.</h2>
                        <h2>B<span>a</span>r<span>a</span></h2>
                    </NavLink>
                </div>
            </div>

            <div className="stock">
                <h3>Mes articles en ligne</h3>

                <div className="articles">

                    {Array(9).fill(1).map((el, i) =>


                        <div className="article">
                            <img src={img} alt="image de l'article" />
                            <Link exact to="/modify" >
                                <h4>VESTE Bleu</h4>
                            </Link>
                            <table>
                                <tr>
                                    <th>Taille</th>
                                    <th>Stock</th>
                                </tr>
                                <tr>
                                    <td>XXL</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>XL</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>18</td>
                                </tr>
                                <tr>
                                    <td>S</td>
                                    <td>10</td>
                                </tr>
                            </table>
                            <p className="reference"> Réf: HTR00001</p>
                        </div>


                    )}
                </div>
            </div>

            <div className="commandes">
                <h3>Les commandes</h3>

                <div className="etat-commande">
                    <div className="all">
                        <p>Toutes</p>
                    </div>
                    <div className="en-cours">
                        <p>En cours</p>
                    </div>
                </div>
                <div className="container-commande">

                    {Array(9).fill(1).map((el, i) =>
                        <div className="commande">
                            <h2>Status : En Attente</h2>
                            <p>N° : AIF53NDSCN5218LPON</p>
                            <p>Total : 58€</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="creation">
                <h3>Mettre en ligne un nouvel article</h3>
                <form>

                    <div className="ref-article">
                        <label htmlFor="ref">Réference de l'article</label>
                        <input type="text" name="ref" id="ref" placeholder="référence" className="input-text" />
                    </div>

                    <div className="nom-article">
                        <label htmlFor="name">Nom de l'article</label>
                        <input type="text" name="name" id="name" placeholder="nom de l'article" className="input-text" />
                    </div>

                    <div className="color-article">
                        <label htmlFor="color">Couleur de l'article</label>
                        <input type="text" name="color" id="color" placeholder="couleur" className="input-text" />
                    </div>

                    <div className="description-article">
                        <label htmlFor="description">Description de l'article</label>
                        <input type="fild" name="description" id="description" placeholder="description" className="input-text" />
                    </div>

                    <div className="prix-article">
                        <label htmlFor="prix">Prix de l'article</label>
                        <input type="number" name="prix" id="prix" placeholder="prix de l'article" className="input-text" />
                    </div>

                    <div>
                        <label htmlFor="picture">Choisir la photo de l'article</label>
                        <input type="file" id="picture" name="picture" accept="image/png, image/jpeg" placeholder="photo de l'article" />
                    </div>

                    <div className="button-submit">
                        <input className="btn-input" type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

// == export
export default Admin;

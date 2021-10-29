// == Import des librairies
import React from 'react';
import Header from '../Header';
import { NavLink } from 'react-router-dom';

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
                            <h4>VESTE Bleu</h4>
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
                <h3>Mettre en ligne un nouvelle article</h3>
            </div>
        </div>
    );
};

// == export
export default Admin;
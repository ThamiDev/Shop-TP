import React from 'react';
import { Status } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// == Import des composants
import Header from '../Header';

// == Import du style
import './notfound.scss';


// == Composant
const NotFound = () => {
  return (
      <div>
        <Header />
        <div className="notfound">
          <h1>Not found 404</h1>
          <div className="btn-back">
            <p>Retour à l'acceuil</p>
            <Link to="/">
              <FontAwesomeIcon icon={faUndoAlt} className="icon-back" />
            </Link>
          </div>
        </div>
      </div>
  );
};

// == Export
export default NotFound;

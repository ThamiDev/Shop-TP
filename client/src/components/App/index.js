// == Import des librairies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// == Import du style
import './styles.scss';

// == Import des Composants
import Home from '../Home';
import Tshirt from '../Tshirt';
import Pantalons from '../Pantalon';
import Chaussures from '../Chaussures';
import Shop from '../Shop';
import Item from '../Item';
import Login from '../Login';
import Admin from '../Admin';

// == Composant
const App = () => { 

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tshirt" exact component={Tshirt} />
          <Route path="/pantalons" exact component={Pantalons} />
          <Route path="/chaussures" exact component={Chaussures} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/article" exact component={Item} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// == Export
export default App;
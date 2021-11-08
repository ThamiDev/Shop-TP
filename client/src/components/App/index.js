// == Import des librairies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// == Import du style
import './styles.scss';

// == Import des Composants
import Home from '../Home';
import Shop from '../Shop';
import Item from '../Item';
import Login from '../Login';
import Admin from '../Admin';
import Register from '../Register';
import Modify from '../Modify';
import Casquette from '../Casquette';
import Bonnet from '../Bonnet';
import Bob from '../Bob';

// == Composant
const App = () => { 

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/casquette" exact component={Casquette} />
          <Route path="/bonnet" exact component={Bonnet} />
          <Route path="/bob" exact component={Bob} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/article" exact component={Item} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/modify" exact component={Modify} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// == Export
export default App;

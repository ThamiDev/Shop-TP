// == Import des librairies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';

// == Import des composants
import Home from '../Home';
import Tshirt from '../Tshirt';
import Pantalons from '../Pantalon';
import Chaussures from '../Chaussures';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}


// == Export
export default App;
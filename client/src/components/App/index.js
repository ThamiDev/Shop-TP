// == Import des librairies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// == Import du style
import './styles.scss';

// == Import des Composants
import Home from '../Home';
import Vondutch from '../Vondutch';
import Shop from '../Shop';
import Item from '../Item';
import Login from '../Login';
import Admin from '../Admin';
import Register from '../Register';
import Modify from '../Modify';
import Newera from '../Newera';
import Capslab from '../Capslab';

// == Composant
const App = () => { 

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newera" exact component={Newera} />
          <Route path="/capslab" exact component={Capslab} />
          <Route path="/von-dutch" exact component={Vondutch} />
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

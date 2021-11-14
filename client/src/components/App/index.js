// == Import des librairies
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

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
import NotFound from '../NotFound';

// == Composant
const App = () => {

  function checkAdmin() {
    const token = localStorage.getItem("token");

    if (!token) {
      return (
        <Redirect to="/" />
      )
    } else {
      const dataToken = jwt_decode(token);
      if (dataToken.user.role === "1") {
        return (
          <Admin />
        )
      }
    }
  };

  function checkUser() {
    const token = localStorage.getItem("token");

    if (!token) {
      return (
        <Redirect to="/login" />
      )
    } else {
      return (
        <Shop />
      )
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/casquette" exact component={Casquette} />
          <Route path="/bonnet" exact component={Bonnet} />
          <Route path="/bob" exact component={Bob} />
          <Route path="/shop" exact >{checkUser()}</Route>
          <Route path="/article" exact component={Item} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/admin" exact >{checkAdmin()}</Route>
          <Route path="/modify" exact component={Modify} />
          <Route component={NotFound} status={404}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// == Export
export default App;

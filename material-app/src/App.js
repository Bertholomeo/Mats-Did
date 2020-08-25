import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/Login';

import All from './pages/All';
import Create from './pages/Create'
import Update from './pages/Update'
import Single from './pages/Single'

import AllUser from './pages/AllUser';
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'
import SingleUser from './pages/SingleUser'
function App() {
  return (
    <div className="App">
<Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/materiales" component={All}/>
          <Route path="/material/single/:id" component={Single}/>
          <Route path="/material/nuevo-material" component={Create}/>
          <Route path="/material/editar-material/:id" component={Update}/>

          <Route path="/users" component={AllUser}/>
          <Route path="/user/single/:id" component={SingleUser}/>
          <Route path="/user/nuevo-user" component={CreateUser}/>
          <Route path="/user/editar-user/:id" component={UpdateUser}/>
        </Switch>
        </Router>
    </div>
  );
}

export default App;

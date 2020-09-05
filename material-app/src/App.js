import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


// COMPONENTES
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'

import All from './pages/All';
import Create from './pages/Create'
import Update from './pages/Update'
import Single from './pages/Single'

import AllUser from './pages/AllUser';
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'
import SingleUser from './pages/SingleUser'

import IndexArchivo from './pages/archivos/Index'
import CreateArchivo from './pages/archivos/Create'


function App() {
    return (
		<Router>
			<Switch>
				<Route path="/login" exact component={Login} />
				<PrivateRoute path="/materiales" component={All}/>
          		<PrivateRoute path="/material/single/:id" component={Single}/>
          		<PrivateRoute path="/material/nuevo-material" component={Create}/>
          		<PrivateRoute path="/material/editar-material/:id" component={Update}/>

         		<PrivateRoute path="/users" component={AllUser}/>
          		<PrivateRoute path="/user/single/:id" component={SingleUser}/>
         		<PrivateRoute path="/user/nuevo-user" component={CreateUser}/>
         		<PrivateRoute path="/user/editar-user/:id" component={UpdateUser}/>
				
				<PrivateRoute path="/users" component={AllUser}/>
          		<PrivateRoute path="/user/single/:id" component={SingleUser}/>

				<PrivateRoute path="/archivos" component={IndexArchivo}/>
          		<PrivateRoute path="/archivo/nuevo" component={CreateArchivo}/>  
			</Switch>

		</Router>
    );
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


// COMPONENTES
import PrivateRoute from './components/PrivateRoute'
import Login from './Pages/Login'

import All from './Pages/All';
import Create from './Pages/Create'
import Update from './Pages/Update'
import Single from './Pages/Single'

import AllUser from './Pages/AllUser';
import CreateUser from './Pages/CreateUser'
import UpdateUser from './Pages/UpdateUser'
import SingleUser from './Pages/SingleUser'

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
			</Switch>

		</Router>
    );
}

export default App;

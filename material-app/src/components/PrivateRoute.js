import React, {useContext} from 'react'
import {GlobalesContext} from '../Providers/Context';
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Wrapped, ...rest}) =>{
    const { state, dispatch } = useContext(GlobalesContext);
    return(
        <Route {...rest} render={(props) => {
            console.log(state.user)
            return(
                state.user === ''
                ? <Redirect to='/login'/>
                : <Wrapped {...props}/>
            )
        }}/>
    )
}

export default PrivateRoute
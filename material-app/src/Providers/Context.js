import React, {  useReducer, createContext } from 'react';

const initialState = {
    user:'',
    password:'',
    userData: []
}
function reducer(state, action) {
    return { ...state, ...action };
}

const GlobalesContext = createContext();

const GlobalesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
		<GlobalesContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalesContext.Provider>
    );
};
  
  export { GlobalesContext, GlobalesProvider };
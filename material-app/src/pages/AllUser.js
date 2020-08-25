import React, {useEffect, useState}  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import layout from '../pages/Login/components/layout'

import Userbtn from '../pages/Login/components/Userbtn';

const AllUser = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        //const {loading, setLoading} = useState(true);
        const URL = 'http://localhost:3001/api/users/'
                axios.get(URL)
                .then(function(response){
                    setUsers(response.data.data)
                })
                .catch(function(error){
                    //handle error
                    alert('No se pudo realizar la conexión');
                })  
                .then(function (){
                    console.log('Todo ha cargado correctamente')
                });
    },[])
    return(
        <AllWrap>
            {users.map(item=>{
                return(
                    <Userbtn key={item._id} id={item._id} username={item.username}/>
                )
            })}
        </AllWrap>
    )
}

const AllWrap = styled.section`
    padding-top: 2em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default layout (AllUser);
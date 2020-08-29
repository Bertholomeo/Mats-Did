import React, {useEffect, useState}  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

import layout from '../pages/Login/components/layout'

import MaterialBtn from '../pages/Login/components/Materialbtn';

const All = () => {
    const [materiales,setMateriales] = useState([])
    useEffect(() => {
        //const {loading, setLoading} = useState(true);
        const URL = 'http://localhost:3001/api/materiales/'
                axios.get(URL)
                .then(function(response){
                    setMateriales(response.data.data)
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
            <MaterialNew>
                <div className="vacio"></div>
                <NavLink to="/material/nuevo-material" className="nuevoMat">Nuevo material</NavLink>
            </MaterialNew>
            {materiales.map(item=>{
                return(
                    
                    <MaterialBtn key={item._id} id={item._id} title={item.title}/>
                )
            })}
        </AllWrap>
    )
}

const AllWrap = styled.section`
    padding: 2em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const MaterialNew = styled.section`
    width: 100%;
    height: 3em;
    display: flex;
    align-items: center;
    .vacio{
        background: blue;
        width: 90%;
        height: auto;
    }
`

export default layout (All);
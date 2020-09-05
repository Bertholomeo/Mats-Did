import React, {useEffect, useState}  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {NavLink, Link} from 'react-router-dom';

import layout from '../../components/layout'


const Index = () => {
    const [archivos,setArchivos] = useState([])
    useEffect(() => {
        //const {loading, setLoading} = useState(true);
        const URL = 'http://localhost:3001/api/archivos'
        axios.get(URL)
        .then(response=> {
            console.log(response.data.data);
            setArchivos(response.data.data)
        })
        .catch(function(error){
            //handle error
            //alert('No se pudo realizar la conexión');
            console.error(error);
        })  
        .then(function (){
            console.log('Todo ha cargado correctamente')
        });
    },[])
    return(
        <>
            <NavLink to={'/archivo/nuevo'}>Subir Nuevo Archivo</NavLink>
            <ul>
            {archivos.map(archivo => {
                return <li key={archivo._id}><a  href={`http://localhost:3001/api/archivos/${archivo._id}`} target="_blank" download>{archivo.name}</a> </li>             
            })} 
            </ul>  
        </>
    )
}



export default layout (Index);
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from 'axios';

import layout from '../pages/Login/components/layout'

const Single = (props) => {
    const [material,setMaterial] = useState({});
    const {id} = useParams();
    const history =  useHistory();
    useEffect(() => {
        const URL = `http://localhost:3001/api/materiales/${id}`
                axios.get(URL)
                .then(function(response){
                    setMaterial(response.data.data)
                })
                .catch(function(error){
                    alert('No se pudo realizar la conexión');
                })  
                .then(function (){
                    console.log('Todo ha cargado correctamente')
                });
    },[])
    const eliminarMaterial = () => {
        const URL = `http://localhost:3001/api/materiales/${id}`
        axios.delete(URL)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            alert('No se pudo realizar la conexión');
        })  
        .then(function (){
            history.push('/materiales')
        });
    }
    return(
        <SingleWrap>
            <div className="der">
                <h1 className="titleP">{material.title}</h1>
                <div className="contenido">
                    <div className="contIzq">
                        <h3>Descripción:</h3>
                        <h3>Archivo</h3>
                    </div>                    

                    <div className="contDer">
                        <p>{material.description}</p>
                        <p>{material.archivo}</p>
                    </div>
                </div>
                <div className="btnExtras">
                    <Link to={`/material/editar-material/${id}`} className="btnLink">Editar</Link>
                    <button onClick={eliminarMaterial} className="btn">Borrar</button>
                </div>
            </div>  
            
        </SingleWrap>
    )
}

const SingleWrap = styled.section`
    width: 100%;
    display: flex;
    margin: 2em;
    .izq{
        width: 30%;
        padding: .5em;
        img{
            width: 100%;
            height: auto;
        }
    }
    .der{
        width: 65%;
        padding: 4em;
        align-items: center;
        text-align: center;
        .titleP{
            font-size: 30px;
            color: #4C5059;
            margin-bottom: 1em;
        }
        .contenido{
            width: 100%;
            height: auto;
            display: flex;
            .contIzq{
                width: 30%;
                h3{
                    font-size: 18px;
                    text-align: right;
                    margin-bottom: 1em;
                    color: #2C3540;
                    font-weight: bold;
                    padding: 0 1em;
                }
            }
            .contDer{
                width: 70%;
                p{
                    font-size: 18px;
                    text-align: left;
                    margin-bottom: 1em;
                    padding: 0 1em;
                }
            }
        }
        
        .btnExtras{
            width: 100%;
            height: auto;
            margin-top: 5em;
            .btnLink{
                border: none;
                width: 20%;
                background: #191F26;
                color: #fff;
                padding: .65em 2.5em;
                border-radius: 12px;
                margin-right: 5%;
            }
            .btn{
                border: none;
                width: 20%;
                background: #191F26;
                color: #fff;
                height: 2.7em;
                border-radius: 12px;
                font-size: 15px;
                margin-left: 5%;
            }
        }
    }
`
export default layout (Single);
import React, { useEffect, useState } from 'react';
import {Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import layout from '../components/layout'

const Update = () => {
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
                    console.log('Todo funciona correctamente')
                });        
    },[])
    return(<>
        <h1 className="titlePrincipal">Editar Material</h1>
        {material.title &&
            <Formik
            initialValues={{
                title: material.title,
                description: material.description,
                img: material.img,
                archivo: material.archivo
            }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .max(120, 'Hasta 120 caracteres')
                    .required('Es requerido'),
                description: Yup.string()
                    .required('Es requerido'),
                img: Yup.string()
                    .required('Es requerido'),
                archivo: Yup.string()
                    .required('Es requerido')
            })}
            onSubmit = {(values, {setSubmitting})=>{
                const URL = `http://localhost:3001/api/materiales/${id}`
                axios.put(URL,values)
                .then(function(response){
                    setSubmitting(false)
                    console.log(response)
                    history.push('/materiales')
                })
                .catch(function(error){
                    console.log(error)
                    alert('Error intenta mas tarde')
                })                
                
            }}
            
        >
            {
                formik => (
                    <FormWrap onSubmit={formik.handleSubmit}>
                        <MiInputWrap>
                            <Field 
                                name="title" type="text" as={MiInput}
                                placeholder="Título de material" />
                            <ErrorMessage 
                                component={MiError} name="title"/>
                        </MiInputWrap>

                        <MiInputWrap>
                            <Field 
                                name="description" type="text" as={MiInput}
                                placeholder="Descripción del archivo" />
                            <ErrorMessage 
                                component={MiError} name="description"/>
                        </MiInputWrap>

                        <MiInputWrap>
                            <Field 
                                name="img" type="text" as={MiInput}
                                placeholder="Link de imagen" />
                            <ErrorMessage 
                                component={MiError} name="img"/>
                        </MiInputWrap>

                        <MiInputWrap>
                            <Field 
                                name="archivo" type="text" as={MiInput}
                                placeholder="Archivos del material" />
                            <ErrorMessage 
                                component={MiError} name="archivo"/>
                        </MiInputWrap>

                        <BtnWrap>
                            <button type="submit" title="editar">Editar</button>                   
                        </BtnWrap>
                    </FormWrap>
                )
            }
        </Formik>
        }
    </>)
}


const FormWrap = styled.form`
    display:grid;
    grid-template: auto / 1fr 1fr;
    grid-gap:2%;
    margin-top:2em;
`
const MiInputWrap = styled.div`
    width: 100%;
    position: relative;
    .startCreate{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
    }
    .votoDiv{
        width: 30%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
    }
`
const MiInput = styled.input`
    width:100%;
    display: block;
    margin-bottom:1em;
    border:1px solid #989898;
    padding:.8em 1.5em;
    border-radius:5px;
    outline: none;
`

const MiError = styled.div`
    display: inline-block;
    background: red;
    position: absolute;
    z-index: 998;
    top: 0;
    right: 0;
    padding: .6em .5em;
    border-radius: 0 5px 5px 0;
    color: #fff;
`
const BtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    button{
        display: inline-block;
        padding: .5em 1em;
        border: 1px solid #000;
        border-radius: 5px;
        color: #000;
        background: #fff;
    }
    button:hover{
        transform: scale(1.1);
    }
`

export default layout (Update);
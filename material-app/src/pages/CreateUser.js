import React from 'react';
import {Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const CreateUser = () => {
    const history =  useHistory();
    return(<>
        <h1 className="titlePrincipal">Crear nuevo usuario</h1>
        <Formik
            initialValues={{
                username: '',
                password: '',
                rol: '',
                nombreUser: '',
                apellidoUser: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .max(12, 'Hasta 12 caracteres')
                    .required('Es requerido'),
                password: Yup.string()
                    .max(6, '6 caracteres')
                    .required('Es requerido'),
                rol: Yup.string()
                    .required('Es requerido'),
                nombreUser: Yup.string()
                    .required('Es requerido'),
                apellidoUser: Yup.string()
                    .required('Es requerido')
            })}
            onSubmit = {(values, {setSubmitting})=>{
                const URL = 'http://localhost:3001/api/users'
                axios.post(URL,values)
                .then(function(response){
                    setSubmitting(false)
                    console.log(response)
                    history.push('/')
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
                                name="username" type="text" as={MiInput}
                                placeholder="Nombre de usuario" />
                            <ErrorMessage 
                                component={MiError} name="username"/>
                        </MiInputWrap>

                        <MiInputWrap>
                            <Field 
                                name="password" type="text" as={MiInput}
                                placeholder="Contraseña" />
                            <ErrorMessage 
                                component={MiError} name="password"/>
                        </MiInputWrap>

                        <MiInputWrap>
                            <Field 
                                name="rol" type="text" as={MiInput}
                                placeholder="Estudiante o admin" />
                            <ErrorMessage 
                                component={MiError} name="rol"/>
                        </MiInputWrap>

                        <MiInputWrap>
                            <Field 
                                name="nombreUser" type="text" as={MiInput}
                                placeholder="Nombre personal" />
                            <ErrorMessage 
                                component={MiError} name="nombreUser"/>
                        </MiInputWrap>

                        <MiInputWrap>
                            <Field 
                                name="apellidoUser" type="text" as={MiInput}
                                placeholder="Apellido personal" />
                            <ErrorMessage 
                                component={MiError} name="apellidoUser"/>
                        </MiInputWrap>

                        <BtnWrap>
                            <button type="submit">Crear</button>
                        </BtnWrap>
                    </FormWrap>
                )
            }
        </Formik>
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
export default CreateUser;
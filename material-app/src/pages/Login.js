import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import {GlobalesContext} from '../Providers/Context';

import './Login.css'
import Title from '../components/Title/Title';
import Label from '../components/Label/Label';
import Input from '../components/Input/Input';


const Login = () => {
    const history =  useHistory();
    const[ user, setUser ] = useState({}); 
    const { state, dispatch } = useContext(GlobalesContext);   
    const {id} = useParams();
    const[ password, setPassword ] = useState({});
    const[ passwordError, setPasswordError] = useState(false);
    const[ isLogin, setIsLogin] = useState(false);
    const[ hasError, setHasError] = useState(false);

    const revisaDatos = e =>{
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const URL = 'http://localhost:3001/api/users/'
        axios.get(URL, {
            username,
            password
        })
        .then(function (response) {
            console.log(response.data[0])
            if(response.data === 'ok'){
                alert('Error usuario no existe')
            }else{
                dispatch({
                    user: user.username
                });
                history.push('/materiales')
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

        function handleChange(name, value){
            if(name === user.username){
                setUser(value);
                setHasError(false);
            }else{
                if(value.length < 6) {
                    setPasswordError(true);
                    setHasError(false);
                }else{
                    setPasswordError(false);
                    setPassword(value);
                    setHasError(false);
                }
            }
        };
        function ifMatch(param){
            if(param.user.length > 0 && param.password.length > 0){
                if(param.user === user.username && param.password === user.password){
                    const { user, password } = param;
                    let ac = { user,password};
                    let account = JSON.stringify(ac);
                    localStorage.setItem('account', account);
                    setIsLogin(true);
                
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        }}

        function handleSubmit(){
            let account = {user, password}
            if(account){
                ifMatch(account)
            }
        }

    return( 
        <div className='login-container'>
            { isLogin ?
                <div className='home-container'>
                    <h1>¡Hola, {user}!</h1>
                    <label>Felicitaciones, estas logueado.</label>
                    <BtnCont>
                        <Link to={`/materiales`} className="btnLink">Continuar</Link>
                    </BtnCont>
                </div>
            :
            <div className='login-content'>
                <form action="#" onSubmit={revisaDatos}>
            <Title text='¡Bienvenido!'/>
            { hasError &&
                <label className='label-alert'>
                    Su contraseña o usuario son incorrectos,
                    o no existen en nuestra plataforma.
                </label>
            }
            <Label text='Usuario'/>
            <Input 
            attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            <Label text='Contraseña'/>
            <Input 
            attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            param={passwordError}
            />

            { passwordError &&
                <label className='label-error'>
                    Contraseña inválida o incompleta
                </label>
            }
            <div className='submit-button-container'>
            <button onClick={handleSubmit} className='submit-button'>
                Ingresar
            </button>
            <BtnNew>
            <Link to={`/user/nuevo-user`} className="btnNew">Nuevo usuario</Link>
            </BtnNew>
            </div></form>
            </div>
            }
        </div>
    )
};

const BtnCont = styled.div `
    width: 100%;
    height: auto;
    margin-top: 3em;
    .btnLink{
        border: none;
        width: 20%;
        background: #191F26;
        color: #fff;
        padding: .65em 2.5em;
        border-radius: 12px;
        margin-right: 5%;
    }
`

const BtnNew = styled.div `
    display: flex;
    width:50%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .btnNew{
    width: 90%;
    height: 40px;
    border-radius: 25px;
    border: none;
    outline: none;
    background: rgb(7, 69, 71);
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    }
    .btnNew:hover{
    opacity: 0.6;
}
`


export default Login;
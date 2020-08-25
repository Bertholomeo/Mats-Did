import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import conos from '../components/img/conos.png';

const Header = () => {
    return(
        <HeaderWrap>
            <div className="logo"> 
                <NavLink to="/"><img src={conos} alt="logo iconos"/></NavLink>
            </div>
            <nav>
                <NavLink to="/users">Usuarios</NavLink>
                <NavLink to="/materiales">Materiales</NavLink>
                <NavLink to="/*">Archivos</NavLink>
                <NavLink to="/*">Comentarios</NavLink>
            </nav>
        </HeaderWrap>    
    )
}

const HeaderWrap = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 1px 1px 3px #BEB6B6;
    position: fixed;
    background: #fff;
    nav{
        width: 70%;
        height: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 20px;
    }
    img{
        height: 35px;
        width: auto;
    }
`

export default Header;
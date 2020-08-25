import React from 'react';
import styled from 'styled-components';

import Btnredondo from './Btnredondo';

const Userbtn = (props) => {
    return(
        <UserWrap>
            <h2>{props.username}</h2>
            <p>{props.rol}</p>
            <Btnredondo title="ver mas" to={`user/single/${props.id}`}/>            
        </UserWrap>
    )
}

const UserWrap = styled.article`
    width: 24%;
    margin-bottom: 2em;
    h2{
        text-align: center;
        color: grey;
        margin: .5em 1em;
        overflow: hidden;
        white-space: nowrap;
    }
    img{
        display: block;
        width: 100%;
    }
    .estrellas{
        margin-left:auto;
        margin-right:auto;
        margin-top: 1.5em;
        width: 35%;
    }
`
export default Userbtn;
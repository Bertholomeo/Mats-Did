import React from 'react';
import styled from 'styled-components';

import Btnredondo from './Btnredondo';

const Materialbtn = (props) => {
    return(
        <MaterialWrap>
            <h2>{props.title}</h2>
            <img src="https://dummyimage.com/600x800/000000/ffffff&text=Material" alt="Material"></img>   
            <div classname="cuadrobajo"></div>        
            <Btnredondo title="ver mas" to={`material/single/${props.id}`}/>            
        </MaterialWrap>
    )
}

const MaterialWrap = styled.article`
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
    .cuadrobajo{
        width: 600px;
        height: 800px;
        margin: -2em;
    }
`
export default Materialbtn;
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Btnredondo = (props) => {
    return(
        <BtnWrap>
            <Link to={props.to}>
                {props.title}
            </Link>
        </BtnWrap>
    )
}

const BtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    a{
        display: inline-block;
        padding: .5em 1em;
        border: 1px solid #000;
        border-radius: 5px;
        color: #000;
    }
    a:hover{
        transform: scale(1.1);
    }
`

export default Btnredondo;
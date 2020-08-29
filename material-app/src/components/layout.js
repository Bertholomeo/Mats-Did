import React from 'react'

import {createGlobalStyle} from 'styled-components';

import Header from './Header';



function layout (Wrapped){
    return function (){
        return(
            <div>
      <GlobalStyle/>
      <Header/>
      <div className="space"></div>
      <Wrapped/>
      
    </div>
            
        );
    }
}


const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td{background: transparent;border: 0;margin: 0;padding: 0;vertical-align: baseline} a{text-decoration:none}
    /*GENERALES*/
    * , *:after ,:before{
        -ms-box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-box-sizing:border-box;
        box-sizing:border-box;
    }
    .animado, a, button{
        -ms-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
    .wrap{
        width: 90%;
        margin: auto
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    body{
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      background: #ededed;
    }
    .space{
      width: 100%;
      height: 50px;
    }

    .titulos{
      font-family: 'Josefin Sans', sans-serif;
      text-align: center;
      margin-top: 1em;
      color: grey;
      font-size: 3em;
    }
`
export default layout;
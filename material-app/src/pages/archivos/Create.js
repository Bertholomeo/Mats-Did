import React, {useEffect, useState}  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

import {withRouter} from 'react-router-dom';

import layout from '../../components/layout'

class Create extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            archivo: []
        };
    }

    uploadFile = (event) => {
        event.preventDefault();
        const URL = 'http://localhost:3001/api/archivos';
        
        const formData = new FormData();
        formData.append('sampleFile', this.state.archivo);

        axios.post(URL, formData)
        .then(response=> {
            console.log(response.data);
        })
        .catch((error) =>  {
            //handle error
            console.error(error);
        })  
        .then(() => {
            console.log('Todo ha cargado correctamente');
            this.props.history.push('/archivos');
        });
    }

    render() {
        return(
            <>
                <NavLink to='/archivos'>Regresar a archivos</NavLink>
                <form onSubmit={this.uploadFile} encType="multipart/form-data">
                    <label htmlFor="input-file">Archivo: </label>
                    <input type="file" onChange={event => { this.setState({archivo: event.target.files[0]}) }} />
                    <button type="submit">Subir</button>
                </form>
            </>        
        )
    }
    
}

export default layout(withRouter (Create));
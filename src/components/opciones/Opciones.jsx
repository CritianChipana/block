import React from 'react';
import { Link } from 'react-router-dom';


import './opciones.css';

export const Opciones = ({titulo,logo,direccion,contenidoLink}) => {

    return (
        <>

        
                    <div className="option-item">
                    <h3 className="title-inicioscreen2">{ titulo }</h3>
                    <i className={logo}></i>
                    {/* <p className="inicioscreen-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci vel exercitationem explicabo architecto id?</p> */}
                        <Link
                            className="link-inicio efecto-link-inicio algo-link-inicio"
                            to={`${direccion}`}
                        >
                            ver { contenidoLink }
                        </Link>
                </div>

        </>
    )
}

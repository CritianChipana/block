import React from 'react'
import { Link } from 'react-router-dom';

import "./botonAtras.css";

export const BotonAtras = ( { direccion } ) => {


    return (
        <Link
        className="link-inicio btn-atras"
        to={ `/block/${ direccion }` }
        >
            Atras
        </Link>
    )
}

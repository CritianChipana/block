import React from 'react';

import './integranteCard.css';

export const IntegranteCard = ({
    id,
    nombre,
    frace,
    rol,
    foto
}) => {
    return (
        <div className={ `integrante-card-contenedor ${id}`} >
                {
                <div className="card" >
                    <div className="content-perfil" >
                        <img className="perfil-card" src={foto} alt="perfil" />
                    </div>
                    <h3 className="nombre">{nombre}</h3>
                    <p className="frace">{frace}</p>
                    <p className="rol">{rol}</p>
                </div>
                }
        </div>
    )
}

import React from 'react';
import "./carta.css";

export const Carta = ({ url,nombre,descripcion , especial}) => {
    return (
        <div className="content-carta">
            <div className={ `content-img-carta  ${especial}`}>
                <img className="img-carta" src={url} alt="casa" />
            </div>
            <div className="content-descrition-carta" >
                <p><strong>{ nombre }</strong></p>
                <p>{ descripcion }</p>
            </div>
        </div>
    )
}

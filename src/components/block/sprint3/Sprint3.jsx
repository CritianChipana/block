import React from 'react'

import { selectorByNameOptionSprint3 } from '../../selectors/selectorByNameOptions';
import { Opciones } from '../../opciones/Opciones';

export const Sprint3 = () => {

    const aa = selectorByNameOptionSprint3("sprint3");

    return (
        <>
        <h2 className="title-principal indicador">SPRINT <strong>III</strong> </h2>
        <div className="content-inicio-options">
            {
                aa.map( (data)=>(
                    <Opciones key={data.titulo} {...data} />
                ))
            }
        </div>

    </>
    )
}

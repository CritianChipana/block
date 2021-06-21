import React from 'react';

import { selectorByNameOptionSprint2 } from '../../selectors/selectorByNameOptions';
import { Opciones } from '../../opciones/Opciones';

export const Sprint2 = () => {

    const aa = selectorByNameOptionSprint2("sprint2");

    return (
         <>
            <h2 className="title-principal indicador">SPRINT <strong>II</strong> </h2>
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

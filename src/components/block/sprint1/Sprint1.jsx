import React from 'react'
import { Opciones } from '../../opciones/Opciones'
import { selectorByNameOptions } from '../../selectors/selectorByNameOptions'



export const Sprint1 = () => {

    const aa = selectorByNameOptions("sprint1");

    return (
        <div className="content-inicio-options">
            {
                aa.map( (data)=>(
                    <Opciones key={data.titulo} {...data} />
                ))
            }
        </div>
    )
}

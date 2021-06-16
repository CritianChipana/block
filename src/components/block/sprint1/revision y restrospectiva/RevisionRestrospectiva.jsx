import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Opciones } from '../../../opciones/Opciones'
import { selectorByNameOptions } from '../../../selectors/selectorByNameOptions'

export const RevisionRestrospectiva = () => {

    const aaa = selectorByNameOptions("elementos11")


    return (
        <div className="option-sprint-content">
        <BotonAtras direccion={"sprint1"} /> 
        <div className="content-inicio-options">

            {
                aaa.map( (data)=>(
                    <Opciones key={ data.titulo }  {...data}/>
                ) )
            }
        </div>
        <BotonAtras direccion={"sprint1"} /> 
    </div>
    )
}
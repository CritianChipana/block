
import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Opciones } from '../../../opciones/Opciones'
import { selectorByNameOptions } from '../../../selectors/selectorByNameOptions'

export const Lanzamiento = () => {

    const aaa = selectorByNameOptions("elementos12")


    return (

        <>

            <h2 className="title-principal indicador">Lanzamineto del sprint <strong>I</strong> </h2>

            <div className="option-sprint-content">
                <BotonAtras direccion={"sprint1"} /> 
                <div className="content-lanzamiento-option">

                    {
                        aaa.map( (data)=>(
                            <Opciones key={ data.titulo }  {...data}/>
                            ) )
                        }
                </div>
                <BotonAtras direccion={"sprint1"} /> 
            </div>
        </>
    )
}
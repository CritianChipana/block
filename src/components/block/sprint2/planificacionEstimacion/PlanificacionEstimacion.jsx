import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Opciones } from '../../../opciones/Opciones'
import { selectorByNameOptionSprint2 } from '../../../selectors/selectorByNameOptions'

import "./planificacionEstimacion.css"

export const PlanificacionEstimacion2 = () => {
    
    const aaa = selectorByNameOptionSprint2("elementos9")
    return (

        <>
            <h2 className="title-principal indicador">Planificacion y Estimacion del sprint <strong>II</strong> </h2>

            <div className="option-sprint-content">
                <BotonAtras direccion={"sprint2"} /> 
                <div className="content-inicio-options">
                    
                    {
                        aaa.map( (data)=>(
                            <Opciones key={ data.titulo }  {...data}/>
                        ) )
                    }
                </div>
                <BotonAtras direccion={"sprint2"} /> 
            </div>
        </>
    )
}

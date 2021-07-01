import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Opciones } from '../../../opciones/Opciones'
import { selectorByNameOptionSprint3 } from '../../../selectors/selectorByNameOptions'

export const Implementacion3 = () => {

    const aaa = selectorByNameOptionSprint3("elementos10")


    return (

        <>
            <h2 className="title-principal indicador">Implementacion del sprint <strong>III</strong> </h2>

            <div className="option-sprint-content">
            <BotonAtras direccion={"sprint3"} /> 
            <div className="content-inicio-options">

                {
                    aaa.map( (data)=>(
                        <Opciones key={ data.titulo }  {...data}/>
                        ) )
                    }
            </div>
            <BotonAtras direccion={"sprint3"} /> 
            </div>
        </>
    )
}

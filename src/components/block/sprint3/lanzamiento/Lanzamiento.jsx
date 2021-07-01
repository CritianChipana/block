
// import { Chart } from 'chart.js';
// import React, { useEffect } from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Opciones } from '../../../opciones/Opciones'
import { selectorByNameOptionSprint3 } from '../../../selectors/selectorByNameOptions'

export const Lanzamiento3 = () => {

    const aaa = selectorByNameOptionSprint3("elementos12")


    return (
        <>
            <div>
                <canvas id="myChart" width="400" height="400"></canvas>

            </div>
            



            <h2 className="title-principal indicador">Lanzamineto del sprint <strong>II</strong> </h2>


            <div className="option-sprint-content">
                <BotonAtras direccion={"sprint2"} /> 
                <div className="content-lanzamiento-option">

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
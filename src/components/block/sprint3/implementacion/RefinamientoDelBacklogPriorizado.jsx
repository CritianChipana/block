import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const RefinamientoDelBacklogPriorizado3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"implementacion3"} /> 
    

            <h2 className="title-principal" >Refinamiento del Backlog Priorizado</h2>
            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Backlog Priorizado del Producto</h3>
            <img src="https://i.pinimg.com/originals/5e/20/66/5e206689fff2ab18eee0421ab5f6fc27.jpg" alt="todos" />


            <h2>HERRAMIENTAS</h2>
            <h3>Reunion de revision del Backlog</h3>
            <p>La intención de las reuniones de revisión del Backlog Priorizado del Producto es asegurarse de que se 
                entiendan las historias de usuario y los criterios de aceptación y de que el Product Owner la escriba
                adecuadamente reflejando los requerimientos y prioridades actuales del stakeholder (cliente); que todos en 
                el Equipo Scrum entiendan las historias de usuario y que las historias de usuario de mayor prioridad sean 
                bien refinadas de tal forma que el Equipo Scrum las pueda estimar adecuadamente y avocarse a ellas. </p>

            <iframe width="709" height="399" src="https://www.youtube.com/embed/SoO_jZ-o1L0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Backlog Priorizado del Producto actualizado</h3>
            <img src="https://i.pinimg.com/originals/6c/bd/51/6cbd514d43a1d3cde8082ccae799c90a.jpg" alt="jose" />
            <BotonAtras direccion={"implementacion3"} /> 

        </div>
    )
}

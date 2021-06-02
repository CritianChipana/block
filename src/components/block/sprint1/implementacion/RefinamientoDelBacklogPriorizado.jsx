import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const RefinamientoDelBacklogPriorizado = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"implementacion"} /> 
    

            <h2 className="title-principal" >CREAR ENTREGABLE</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Backlog Priorizado del Producto</h3>
            <img src="https://i.pinimg.com/originals/fc/77/17/fc77178b93caa15bf0aa240ab0ac0f9b.png" alt="todos" />


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
            <img src="https://i.pinimg.com/originals/c0/52/7e/c0527ea64d0eec959b0bd34e09135321.jpg" alt="jose" />
            <img src="https://i.pinimg.com/originals/82/fb/02/82fb02e4275047e64e15b0a242bcfb2e.jpg" alt="jose" />
            <img src="https://i.pinimg.com/originals/7d/33/e8/7d33e89d6255f284e85824f2d98fd49b.jpg" alt="jose" />
            <BotonAtras direccion={"implementacion"} /> 

        </div>
    )
}

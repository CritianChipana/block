import React from 'react'
import { calendario } from '../../../../data/calendario'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Silder } from '../../../slider/Silder'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const ComprometerHistoriaUsuario = () => {
    return (
        
        <div  className="contenedor-desarrollo-epicas">
        <BotonAtras direccion={"planificacionestimacion"} /> 

            <h2 className="title-principal" >COMPROMETER HISTORIAS DE USUARIO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />
            
            <h3>Historias del usuario estimadas</h3>
                <img src="https://i.pinimg.com/originals/39/cc/21/39cc212cf513e89054cccb4d6358092d.jpg" alt="jose" />
                <img src="https://i.pinimg.com/originals/ba/5b/61/ba5b61a29f352df7e81ddc96859c1e86.jpg" alt="jose" />   
            <h3>Duracion del sprint</h3>
            <Silder  elemtos={ calendario }/>


            <h2>HERRAMIENTAS</h2>
            <h3>Reuniones de planificacion del sprint</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/OJsPUzYuieg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>SALIDAS</h2>
            <h3>Historias de usuario comprometidas</h3>
            <p>De acuerdo a la cantidad necesaria de trabajo que puede ofrecer el equipo de desarrollo, se le preguntó al equipo de desarrollo la cantidad de trabajo que puedes realizar, siendo el puntaje estimado de 115 puntos que puedes llegar a avanzar. Es así como seleccionamos las HU para este primer Sprint.</p>
            <img src="https://i.pinimg.com/originals/dc/ac/58/dcac5870755c923c5803d7872a9ad19d.jpg" alt="nose cualpa  mia" />
        <BotonAtras direccion={"planificacionestimacion"} /> 

        </div>
        
    )
}

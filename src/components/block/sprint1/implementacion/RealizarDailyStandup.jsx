import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Carta } from '../../../carta/Carta'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const RealizarDailyStandup = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"implementacion"} /> 


            <h2 className="title-principal" >CREAR ENTREGABLE</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Scrum master</h3>
            <Carta url={"https://i.pinimg.com/originals/b6/b6/e3/b6b6e30ac8da84228ce4289fb1bef01c.jpg"} nombre={"AYALA PFUTURI MARIA"} descripcion={"Luego de realizar la matriz de disponibilidad y compromiso pudimos concluir que AYALA PFUTURI MARIA es la persona con mejor capacidad para asumir el cargo de SCRUM MASTER del equipo. Gracias a sus habilidades, capacidad de liderazgo y apoyo al equipo."} />


            <h3>Sprint Burndown Chart</h3>
            <img src="https://i.pinimg.com/originals/5d/eb/4d/5deb4d617ee3f36a0f472d0906bc0123.png" alt="alvaro" />


            <h3>Impediment Log</h3>
            <img src="https://i.pinimg.com/originals/e7/14/2c/e7142cd7a90cff0730c802e95f02d71d.jpg" alt="alvaro" />


            <h2>HERRAMIENTAS</h2>
            <h3>Daily Standup</h3>
            <p>Las tres preguntas diarias se utilizan en los Daily Standups, organizados por el Scrum Master, donde cada 
                miembro del Equipo Scrum brinda información en forma de respuesta a tres preguntas específicas:</p>
            <ol>
                <li><p>¿Qué he hecho desde la última reunión?</p></li>
                <li><p>¿Qué tengo planeado hacer antes de la siguiente reunión?</p></li>
                <li><p>¿Qué impedimentos u obstáculos (si los hubiera) estoy enfrentando en la actualidad?</p></li>
            </ol>
            <iframe width="709" height="399" src="https://www.youtube.com/embed/hNWGJXYCqIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            <h2>SALIDAS</h2>
            <h3>Sprint Burndown Chart Actualizado</h3>
            <img src="https://i.pinimg.com/originals/2b/5a/58/2b5a586dfab2d3a20eb3cc8eb81aad0c.jpg" alt="jean" />

            <h3>Impediment Log actualizado</h3>
            <img src="https://i.pinimg.com/originals/08/f7/29/08f7293be5bd62341a710c8b1af3bca9.jpg" alt="red" />
            <BotonAtras direccion={"implementacion"} /> 

        </div>
    )
}

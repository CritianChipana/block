import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Carta } from '../../../carta/Carta'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const RealizarDailyStandup3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"implementacion3"} /> 


            <h2 className="title-principal" >Realizar Daily Standup</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Scrum master</h3>
            <Carta url={"https://i.pinimg.com/originals/b6/b6/e3/b6b6e30ac8da84228ce4289fb1bef01c.jpg"} nombre={"AYALA PFUTURI MARIA"} descripcion={"Luego de realizar la matriz de disponibilidad y compromiso pudimos concluir que AYALA PFUTURI MARIA es la persona con mejor capacidad para asumir el cargo de SCRUM MASTER del equipo. Gracias a sus habilidades, capacidad de liderazgo y apoyo al equipo."} />


            <h3>Sprint Burndown Chart</h3>
            <img src="https://i.pinimg.com/originals/5a/26/51/5a26519ea6daa2f10f39e344cf3a3e02.jpg" alt="jean" />


            <h3>Impediment Log</h3>
            <img src="https://i.pinimg.com/originals/cf/fa/6a/cffa6aafb48debebaa8d7f147c11075f.jpg" alt="alvaro" />


            <h2>HERRAMIENTAS</h2>
            <h3>Daily Standup</h3>
            <p>Las tres preguntas diarias se utilizan en los Daily Standups, organizados por el Scrum Master, donde cada 
                miembro del Equipo Scrum brinda información en forma de respuesta a tres preguntas específicas:</p>
            <ol>
                <li><p>¿Qué he hecho desde la última reunión?</p></li>
                <li><p>¿Qué tengo planeado hacer antes de la siguiente reunión?</p></li>
                <li><p>¿Qué impedimentos u obstáculos (si los hubiera) estoy enfrentando en la actualidad?</p></li>
            </ol>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/hNWGJXYCqIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p></p>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/Dkjz3r8mDMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Sprint Burndown Chart Actualizado</h3>
            {/* <img src="https://i.pinimg.com/originals/08/17/29/0817298af60af20043b5631c2147a0b4.jpg" alt="jean" /> */}
            <img src="https://i.pinimg.com/originals/3c/c5/72/3cc5721b1e5899dcb1cc5e1213f275d0.jpg" alt="jean" />
            {/* <img className="grande-sprint1" src="https://i.pinimg.com/originals/14/bf/74/14bf7481f7a357fda05cdaa973938c71.png" alt="jean" /> */}
            {/* <img className="chicos-sprint1" src="https://i.pinimg.com/originals/63/b0/8c/63b08c38524d5f9758d14e796ebd5f98.jpg" alt="jean" /> */}
            <img src="https://i.pinimg.com/originals/85/7b/35/857b351bef34cb6363ce268c6b84ba73.jpg" alt="jean" />
            
            <h3>Impediment Log actualizado</h3>
            <img src="https://i.pinimg.com/originals/3a/87/79/3a87799429ea3f4742d47c8b3f82f180.jpg" alt="red" />
            <BotonAtras direccion={"implementacion3"} /> 

        </div>
    )
}

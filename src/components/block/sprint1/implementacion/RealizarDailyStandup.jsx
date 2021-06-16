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
            <iframe width="789" height="444" src="https://www.youtube.com/embed/hNWGJXYCqIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p></p>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/Dkjz3r8mDMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Sprint Burndown Chart Actualizado</h3>
            <img src="https://i.pinimg.com/originals/c5/a7/8e/c5a78e2f3e1b4ef0dbb5617b253358c8.png" alt="jean" />
            <img className="grande-sprint1" src="https://i.pinimg.com/originals/14/bf/74/14bf7481f7a357fda05cdaa973938c71.png" alt="jean" />
            <img className="chicos-sprint1" src="https://i.pinimg.com/originals/63/b0/8c/63b08c38524d5f9758d14e796ebd5f98.jpg" alt="jean" />
            <img className="chicos-sprint1" src="https://i.pinimg.com/originals/85/7b/35/857b351bef34cb6363ce268c6b84ba73.jpg" alt="jean" />
            <img className="chicos-sprint1" src="https://i.pinimg.com/originals/d6/90/a4/d690a43724f36c48502e2f692f6df326.jpg" alt="jean" />
            <img src="https://i.pinimg.com/originals/2b/5a/58/2b5a586dfab2d3a20eb3cc8eb81aad0c.jpg" alt="jean" />
            <img className="grande-sprint1"  src="https://i.pinimg.com/originals/93/68/75/9368754e881f1c1f18539b3fd5e32d38.png" alt="jean" />

            <h3>Impediment Log actualizado</h3>
            <img src="https://i.pinimg.com/originals/08/f7/29/08f7293be5bd62341a710c8b1af3bca9.jpg" alt="red" />
            <BotonAtras direccion={"implementacion"} /> 

        </div>
    )
}

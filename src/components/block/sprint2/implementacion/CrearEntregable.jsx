import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const CrearEntregable2 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"implementacion2"} /> 

            <h2 className="title-principal" >CREAR ENTREGABLE</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Sprint Backlog</h3>
            <img src="https://i.pinimg.com/originals/21/34/09/21340926ca8503d3090bd3e81815b5b1.jpg" alt="yo" />

            <h3>Scrumboard</h3>
                <div className="contenedor-img-implementacion">
                    <img src="https://i.pinimg.com/originals/eb/68/34/eb68343045dd4ee3e5aa4f0c27a8942f.jpg" alt="Hola mmgvzo" />
                    <img src="https://i.pinimg.com/originals/7e/3f/20/7e3f20e5cd9a6d479ec860d7396d170b.jpg" alt="Hola mmgvzo" />
                    <img src="https://i.pinimg.com/originals/56/6c/4f/566c4f70780129e01a00267600b0852d.jpg" alt="Hola mmgvzo" />
                </div>

            <h3>Impediment Log</h3>
            <img src="https://i.pinimg.com/originals/cf/fa/6a/cffa6aafb48debebaa8d7f147c11075f.jpg" alt="alvaro" />

            <h2>HERRAMIENTAS</h2>
            <h3>Experiencia del equipo</h3>
            <img src="https://i.pinimg.com/originals/5d/70/b4/5d70b4a7e33d4d72cbafa5ce0533c62b.jpg" alt="img" />


            <h2>SALIDAS</h2>
            <h3>Entregables del sprint</h3>
            <p>Al final de cada sprint se completa un incremento de producto. El entregable debe incluir todas las características y funcionalidades definidas en las historias de usuario que se incluyen en el sprint y deben de haber sido cumplidas satisfactoriamente.</p>
            <img src="https://i.pinimg.com/originals/c7/35/fe/c735fea3d88d7c3461d8ee893c6dc735.jpg" alt="maria" />
            <img src="https://i.pinimg.com/originals/bb/38/de/bb38def6f07d2fc31a9f574bb2a2ee76.jpg" alt="maria" />
            <img src="https://i.pinimg.com/originals/e2/d6/3f/e2d63f3cbfa6e8475cd2501718f95dba.jpg" alt="maria" />


            <h3>Scrunboard actualizado</h3>
            <img src="https://i.pinimg.com/originals/96/63/d3/9663d3e2d7e7fbb51b2f537936bbc0b9.jpg" alt="maria" />

            <h3>Impediment Log actualizado</h3>
            <img src="https://i.pinimg.com/originals/cf/fa/6a/cffa6aafb48debebaa8d7f147c11075f.jpg" alt="alvaro" />

            <BotonAtras direccion={"implementacion2"} /> 
        </div>
    )
}

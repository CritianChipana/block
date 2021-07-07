import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const CrearEntregable3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"implementacion3"} /> 

            <h2 className="title-principal" >CREAR ENTREGABLE</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Sprint Backlog</h3>
            <img src="https://i.pinimg.com/originals/f8/a7/08/f8a708799ae63e1eccedb40a98a53a32.jpg" alt="yo" />

            <h3>Scrumboard</h3>
                <div className="contenedor-img-implementacion">
                    <img src="https://i.pinimg.com/originals/35/cb/88/35cb882d39da1f9c9250515705dafe86.jpg" alt="Hola mmgvzo" />
                    <img src="https://i.pinimg.com/originals/9e/3f/5d/9e3f5d492de441481e1750aa2b1b4693.jpg" alt="Hola mmgvzo" />
                    <img src="https://i.pinimg.com/originals/2e/a9/25/2ea925c389729a8baca407fd5e33282f.jpg" alt="Hola mmgvzo" />
                </div>

            <h3>Impediment Log</h3>
            <img src="https://i.pinimg.com/originals/1a/bc/06/1abc069326e3a6f80494daa45744119b.jpg" alt="alvaro" />

            <h2>HERRAMIENTAS</h2>
            <h3>Experiencia del equipo</h3>
            <img src="https://i.pinimg.com/originals/5d/70/b4/5d70b4a7e33d4d72cbafa5ce0533c62b.jpg" alt="img" />


            <h2>SALIDAS</h2>
            <h3>Entregables del sprint</h3>
            <p>Al final de cada sprint se completa un incremento de producto. El entregable debe incluir todas las características y funcionalidades definidas en las historias de usuario que se incluyen en el sprint y deben de haber sido cumplidas satisfactoriamente.</p>
            <img src="https://i.pinimg.com/originals/01/80/92/0180923dbfc73964d2bbe3942e0bf69c.jpg" alt="maria" />
            {/* <img src="https://i.pinimg.com/originals/bb/38/de/bb38def6f07d2fc31a9f574bb2a2ee76.jpg" alt="maria" />
            <img src="https://i.pinimg.com/originals/e2/d6/3f/e2d63f3cbfa6e8475cd2501718f95dba.jpg" alt="maria" /> */}


            <h3>Scrunboard actualizado</h3>
            <img src="https://i.pinimg.com/originals/a0/08/2d/a0082d472113ccf014ddf8bd94af995e.jpg" alt="maria" />

            <h3>Impediment Log actualizado</h3>
            <img src="https://i.pinimg.com/originals/1a/bc/06/1abc069326e3a6f80494daa45744119b.jpg" alt="alvaro" />

            <BotonAtras direccion={"implementacion3"} /> 
        </div>
    )
}

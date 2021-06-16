import React from 'react'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const EstimarHistoriaUsuario = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion"} /> 

            <h2 className="title-principal" >ESTIMAR HISTORIAS DE USUARIO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />
            <h3>Historias de Usuarios</h3>
            <img src="https://i.pinimg.com/originals/47/57/01/4757018aa312546b591fa03ecc9a8cc6.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/4a/79/3e/4a793e82792ab4579688debd26eccb8a.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/09/46/2f/09462fad03ce4ad50c1996e9d6d89847.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/e6/c4/fb/e6c4fbc0f3a0a00683c22c8bb7a05ccd.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/18/4a/72/184a72605beaa3c0dc787d13819acd62.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/6b/f5/fe/6bf5fe507302db8fde51ceb258ccac0c.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/df/25/9a/df259a6d82e97e4ea5ecc589e654ca48.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/29/30/e2/2930e2636e63522730e5bcff49c133ab.jpg" alt="on" />
            {/* <p>Falta JOSE</p> */}

            <h2>HERRAMIENTAS</h2>
            <h3>Metodo de estimacion</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/GfakUFBE7YQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h2>SALIDAS</h2>
            <h3>Historias del usuario estimadas</h3>
            <img src="https://i.pinimg.com/originals/39/cc/21/39cc212cf513e89054cccb4d6358092d.jpg" alt="jose" />
            <img src="https://i.pinimg.com/originals/ba/5b/61/ba5b61a29f352df7e81ddc96859c1e86.jpg" alt="jose" />
            <BotonAtras direccion={"planificacionestimacion"} /> 

        </div>
    )
}

import React from 'react'
import { prototipos } from '../../../../data/prototipos'
import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { Silder } from '../../../slider/Silder'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const CrearHistoriaUsuario = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion"} /> 

            <h2 className="title-principal" >CREAR HISTORIAS DE USUARIO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Backlog Priorizado del Producto</h3>
            <img src="https://i.pinimg.com/originals/fc/77/17/fc77178b93caa15bf0aa240ab0ac0f9b.png" alt="todos" />

            <h3>Criterios de termino</h3>            
            <ul>
                <li><p>Todas las pruebas unitarias y funcionales son correctas.</p></li>
                <li><p>Todos los criterios de aceptación se cumplen.</p></li>
                <li><p>Ok del equipo: Desarrolladores, Product Owner, etc.</p></li>
                <li><p>Pruebas de rendimiento pasadas</p></li>
                <li><p>Se han corregido todos los bugs.</p></li>
                <li><p>Entorno preparado para la subida a producción.</p></li>
            </ul>

            <h3>Prototipos</h3>
            <Silder  elemtos={prototipos}/>
            

            <h2>HERRAMIENTAS</h2>
            <h3>Experiencia en la redaccion de historias de usuario</h3>
            <p>La experiencia para esta situacion fue retraolimentativa, al estar en un entorno
agil las herramientas estan en nuestra disposicion siendo la unica complicacion 
el ver si las historias que iba planteando cumplian con los criterios de aceptacion
En general consideraria que fue un experiencia satisfactoria.</p>

            <h2>SALIDAS</h2>
            <h3>Historias de usuarios</h3>
            <img src="https://i.pinimg.com/originals/47/57/01/4757018aa312546b591fa03ecc9a8cc6.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/4a/79/3e/4a793e82792ab4579688debd26eccb8a.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/09/46/2f/09462fad03ce4ad50c1996e9d6d89847.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/e6/c4/fb/e6c4fbc0f3a0a00683c22c8bb7a05ccd.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/18/4a/72/184a72605beaa3c0dc787d13819acd62.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/6b/f5/fe/6bf5fe507302db8fde51ceb258ccac0c.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/df/25/9a/df259a6d82e97e4ea5ecc589e654ca48.jpg" alt="on" />
            <img src="https://i.pinimg.com/originals/29/30/e2/2930e2636e63522730e5bcff49c133ab.jpg" alt="on" />
            {/* <p>Falta JOSE</p> */}

            <h3>Criterio de aceptacion de historias del Usuario</h3>
            <img src="https://i.pinimg.com/originals/e9/6e/fd/e96efd485e389a8238aa87e86d58c391.jpg" alt="on jose" />
            <img src="https://i.pinimg.com/originals/20/4c/6c/204c6c199d97c79c1d84fbbf0e4773de.jpg" alt="on jose" />
            <BotonAtras direccion={"planificacionestimacion"} /> 


        </div>
    )
}

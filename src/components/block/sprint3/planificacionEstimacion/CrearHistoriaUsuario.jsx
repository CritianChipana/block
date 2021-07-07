import React from 'react'

import { BotonAtras } from '../../../botonAtras/BotonAtras'
import { SliderCard } from '../../../sliderCard/SliderCard'

export const CrearHistoriaUsuario3 = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"planificacionestimacion3"} /> 
            <h2 className="title-principal" >CREAR HISTORIAS DE USUARIO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />

            <h3>Backlog Priorizado del Producto</h3>
            <img src="https://i.pinimg.com/originals/5e/20/66/5e206689fff2ab18eee0421ab5f6fc27.jpg" alt="todos" />

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
            <img src="https://i.pinimg.com/originals/5d/17/ea/5d17eae8b4859a18ebaf36bbdecd2001.jpg" alt="proto" />
            <img src="https://i.pinimg.com/originals/05/78/9e/05789e25f8f6a5ac81ac9531c0b17fc2.jpg" alt="prototipo" />
            <img src="https://i.pinimg.com/originals/01/80/92/0180923dbfc73964d2bbe3942e0bf69c.jpg" alt="proto" />
            <h2>HERRAMIENTAS</h2>
            <h3>Experiencia en la redaccion de historias de usuario</h3>
            <p>La experiencia para esta situacion fue retraolimentativa, al estar en un entorno agil las herramientas estan en nuestra disposicion siendo la unica complicacion el ver si las historias que iba planteando cumplian con los criterios de aceptacion En general consideraria que fue un experiencia satisfactoria.</p>

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
            <img src="https://i.pinimg.com/originals/ce/3c/53/ce3c53c885ce42dd3d64b2ada991e7fe.jpg" alt="jose" />
            <img src="https://i.pinimg.com/originals/82/0c/c9/820cc98436b334e7c6419d38e489eb1f.jpg" alt="jose" />

            <BotonAtras direccion={"planificacionestimacion3"} /> 


        </div>
    )
}

import React from 'react';
import { BotonAtras } from '../../../botonAtras/BotonAtras';
import { SliderCard } from '../../../sliderCard/SliderCard';

export const RestropectivaProyecto = () => {
    return (
        <div  className="contenedor-desarrollo-epicas">
            <BotonAtras direccion={"lanzamiento3"} /> 

            <h2 className="title-principal" >RETROSPECTIVA DEL PROYECTO</h2>

            <h2>ENTRADAS</h2>
            <h3>Equipo Principal de Scrum</h3>
            <SliderCard elemtos={"as"} />
            
            <h3>Cronograma de planificacion del lanzamiento</h3>
            <img src="https://i.pinimg.com/originals/69/d7/24/69d724a52db43ff3e742198629be3104.jpg" alt="nose" />
            
            <h2>HERRAMIENTAS</h2>
            <h3>Metodos de desplazamiento organizacional</h3>
            <p>todos</p>

            <h2>SALIDAS</h2>
            <h3>Acuerdo de entregables funcionales</h3>
            <img src="https://i.pinimg.com/originals/5b/fb/09/5bfb099901e42ddab767185d73ced168.jpg" alt="alvaro" />
            <img src="https://i.pinimg.com/originals/d9/8b/86/d98b86d483f7fa0373219fd9eaa8714d.jpg" alt="alvaro" />
            <BotonAtras direccion={"lanzamiento3"} /> 

        </div>
    )
}

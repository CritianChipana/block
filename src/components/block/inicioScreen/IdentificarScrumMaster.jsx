import React from 'react';
import { BotonAtras } from '../../botonAtras/BotonAtras';
import { Carta } from '../../carta/Carta';
import "./identificarScrumMaster.css";

export const IdentificarScrumMaster = () => {
    return (
        <div className="contenedor-scrumMaster" >
            
            <h2 className="title-principal" >Scrum Master y Stakeholder</h2>
            <h2>ENTRADAS</h2>
            <h3>Product Owner</h3>
            <Carta url={"https://i.pinimg.com/564x/0f/10/e2/0f10e2bdaa2a7e8b7fbb14d702732125.jpg"} nombre={"NAVARRO VICENTE JOSE"} descripcion={"Se optó por elegir a Jose Navarro Vicente como el Product Owner del Equipo Scrum, debido a que presenta un mayor conocimiento de la empresa, así como también conocimiento en el rubro de la salud, además de poseer las habilidades necesarias para poder desempeñarse correctamente en este rol. Él representará a la empresa NUTRI & FIT dentro del equipo y servirá de vínculo con el stakeholder."} />

            <h3>Declaracion de la vision del Proyecto</h3>
            <p>Desarrollar una aplicación web que brinde herramientas de ayuda personalizada, para que los pacientes de NUTRI & FIT logren mantener un estilo de vida saludable y balanceado.</p>

            <h3>Requerimientos de las personas</h3>
            <img src="https://i.pinimg.com/564x/50/79/e3/5079e33cd3937390877074c806689432.jpg" alt="alvaro" />

            <h3>Disponibilidad y compromiso de las personas</h3>
            <img src="https://i.pinimg.com/originals/26/3d/6d/263d6d9d02695c6d4323ebb675c343e8.jpg" alt="DISPONIBILIDAD  jean" />

            <h3>Matriz de la destrezas requeridas</h3>
            <img src="https://i.pinimg.com/originals/e4/cf/ad/e4cfadba8d34f4924c59f7d0eb29ae65.jpg" alt="Matriz de destresas requeridas jose" />

            <h3>Recomendaciones del Scrum Guidance Body</h3>
            <Carta url={"https://i.pinimg.com/564x/35/20/c8/3520c8736cd3dcbc32d7f248cef8b490.jpg"} nombre={"“Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM”"} descripcion={"Nuestro Scrum Guidance Body es el libro “Una guía para el conocimiento CUERPO DE CONOCIMIENTO DE SCRUM” el cual como primer paso nos recomienda consultar la disponibilidad de tiempo de los miembros del equipo mediante un calendario, luego documentar los roles, responsabilidades y criterios que tiene el Scrum Master para iniciar la selección."} especial={"libro"} />


            <h2>HERRAMIENTAS</h2>
            <h3>Criterios de seleccion</h3>
            <img src="https://i.pinimg.com/564x/b5/0c/8b/b50c8bddf9d9eb8df5f5630e04238c15.jpg" alt="alvaro" />

            <h3>Costos de Recursos</h3>
            <iframe width="789" height="444" src="https://www.youtube.com/embed/zLBX45o0Buk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img className="costos-de-recursos" src="https://i.pinimg.com/564x/a5/08/5e/a5085ef307fbdb28bc777ba9f2097ec2.jpg" alt=" costos de recursos sato" />

            <h2>SALIDAS</h2>
            <h3>Scrum Master Identificado</h3>
            <Carta url={"https://i.pinimg.com/originals/b6/b6/e3/b6b6e30ac8da84228ce4289fb1bef01c.jpg"} nombre={"AYALA PFUTURI MARIA"} descripcion={"Luego de realizar la matriz de disponibilidad y compromiso pudimos concluir que AYALA PFUTURI MARIA es la persona con mejor capacidad para asumir el cargo de SCRUM MASTER del equipo. Gracias a sus habilidades, capacidad de liderazgo y apoyo al equipo."} />


            <h3>Stakeholder Identificado</h3>
            <Carta url={"https://i.pinimg.com/564x/3c/9b/d3/3c9bd38f6241963c91f18858b1f39fb8.jpg"} nombre={"ZEBALLOS CACERES PIERO"} descripcion={"Debido a que es la persona interesada en la realización del proyecto. ZEBALLOS CACERES PIERO será nuestro STAKEHOLDER. Él nos hará llegar los requerimientos de la empresa a través de nuestra Product Owner."} />


            <BotonAtras direccion={ "inicio" } />

        </div>
    )
}

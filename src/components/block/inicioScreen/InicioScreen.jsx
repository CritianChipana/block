import React from 'react';
import { Link } from 'react-router-dom';
import "./inicioScreen.css";
// import { DesarrolloEpicas } from './inicioScreen/DesarrolloEpicas'
// import { IdentificacionEquipoScrum } from './inicioScreen/IdentificacionEquipoScrum'
// import { IdentificarScrumMaster } from './inicioScreen/IdentificarScrumMaster'
// import { VisionDelProyecto } from './inicioScreen/VisionDelProyecto'

export const InicioScreen = () => {
    return (
        <>
        <h2 className="title-principal indicador">INICIO  </h2>

            <div className="content-inicio-options">
                {/* <VisionDelProyecto/>
                <IdentificarScrumMaster/>
                <IdentificacionEquipoScrum/>
                <DesarrolloEpicas/> */}
                <div className="option-item">
                    <h3 className="title-inicioscreen2">VISION DEL PROYECTO</h3>
                    <i className="fab fa-chromecast "></i>
                    {/* <p className="inicioscreen-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci vel exercitationem explicabo architecto id?</p> */}
                    <Link
                            className="link-inicio efecto-link-inicio algo-link-inicio"
                            to="/block/vision"
                        >
                            ver VISION
                        </Link>
                </div>

                <div className="option-item">
                    <h3 className="title-inicioscreen2">IDENTIFICAR AL SCRUM MASTER Y STAKEHOLDER</h3>
                    <i className="fas fa-user"></i>
                    {/* <p className="inicioscreen-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci vel exercitationem explicabo architecto id?</p> */}
                    <Link
                            className="link-inicio efecto-link-inicio algo-link-inicio"
                            to="/block/scrummaster"
                            >
                            ver SCRUM MASTER
                        </Link>
                </div>

                <div className="option-item">
                    <h3 className="title-inicioscreen2">IDENTIFICAR EQUIPO SCRUM</h3>
                    <i className="fas fa-users"></i>
                    {/* <p className="inicioscreen-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci vel exercitationem explicabo architecto id?</p> */}
                    <Link
                            className="link-inicio efecto-link-inicio algo-link-inicio"
                            to="/block/equiposcrum"
                            >
                            ver EQUIPO SCRUM
                        </Link>
                </div>


                <div className="option-item">
                    <h3 className="title-inicioscreen2">DESARROLLAR EPICAS</h3>
                    <i className="far fa-sticky-note"></i>
                    {/* <p className="inicioscreen-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci vel exercitationem explicabo architecto id?</p> */}
                    <Link
                            className="link-inicio efecto-link-inicio algo-link-inicio"
                            to="/block/epicas"
                            >
                            ver EPICAS
                        </Link>
                </div>


                <div className="option-item">
                    <h3 className="title-inicioscreen2">CREAR EL BACKLOG PRIORIZADO DEL PRODUCTO</h3>
                    <i className="fas fa-th"></i>
                    {/* <p className="inicioscreen-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci vel exercitationem explicabo architecto id?</p> */}
                    <Link
                            className="link-inicio efecto-link-inicio algo-link-inicio"
                            to="/block/backlog"
                            >
                            ver BACKLOG
                        </Link>
                </div>

                <div className="option-item">
                    <h3 className="title-inicioscreen2">REALIZAR LA PLANIFICACION DEL LANZAMIENTO</h3>
                    <i className="fas fa-chalkboard-teacher"></i>
                    {/* <p className="inicioscreen-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci vel exercitationem explicabo architecto id?</p> */}
                    <Link
                            className="link-inicio efecto-link-inicio algo-link-inicio"
                            to="/block/planificacion"
                            >
                            ver PLANIFICACION
                        </Link>
                </div>

            </div>
        </>
    )
}


/* 
    Buenas tardes compañeros, queria comentarles si alguien de ustedes tendria algun inconveniente con hacer un cambio al horario que tenemos, podriamos cambiarlo a los jueves y sabados, la principal razon del cambio de horario es un cruce de horarios que tengo en la universidad, pero si hay alguien que no pueda esos dias podria comentar los dias que podria para hacer el cambio de horario y si no llegamos a un acuerdo se mantendria el mismo. ayudenmeeeeeeee xd :v

*/
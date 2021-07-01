import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { BlockScreen } from '../components/block/blockScreen/BlockScreen';
import { CrearBacklogPriorizado } from '../components/block/inicioScreen/CrearBacklogPriorizado';
import { DesarrolloEpicas } from '../components/block/inicioScreen/DesarrolloEpicas';
import { IdentificacionEquipoScrum } from '../components/block/inicioScreen/IdentificacionEquipoScrum';
import { IdentificarScrumMaster } from '../components/block/inicioScreen/IdentificarScrumMaster';
import { InicioScreen } from '../components/block/inicioScreen/InicioScreen';
import { PlanificacionDelLanzamiento } from '../components/block/inicioScreen/PlanificacionDelLanzamiento';
import { VisionDelProyecto } from '../components/block/inicioScreen/VisionDelProyecto';
import { ComprometerHistoriaUsuario } from '../components/block/sprint1/planificacionEstimacion/ComprometerHistoriaUsuario';
import { CrearHistoriaUsuario } from '../components/block/sprint1/planificacionEstimacion/CrearHistoriaUsuario';
import { CrearSprintBackLog } from '../components/block/sprint1/planificacionEstimacion/CrearSprintBackLog';
import { EstimarHistoriaUsuario } from '../components/block/sprint1/planificacionEstimacion/EstimarHistoriaUsuario';
import { EstimarTarea } from '../components/block/sprint1/planificacionEstimacion/EstimarTarea';
import { IdentificarTareas } from '../components/block/sprint1/planificacionEstimacion/IdentificarTareas';
import { PlanificacionEstimacion } from '../components/block/sprint1/planificacionEstimacion/PlanificacionEstimacion';
import { Sprint1 } from '../components/block/sprint1/Sprint1';
import { Sprint2 } from '../components/block/sprint2/Sprint2';
import { Sprint3 } from '../components/block/sprint3/Sprint3';
import { Sprint4 } from '../components/block/sprint4/Sprint4';
import { Footer } from '../components/footer/Footer';
import { NavBar } from './../components/navBar/NavBar';

import { Implementacion } from '../components/block/sprint1/implementacion/Implementacion'
import { CrearEntregable } from '../components/block/sprint1/implementacion/CrearEntregable';
import { RealizarDailyStandup } from '../components/block/sprint1/implementacion/RealizarDailyStandup';
import { RefinamientoDelBacklogPriorizado } from '../components/block/sprint1/implementacion/RefinamientoDelBacklogPriorizado';
import { RevisionRestrospectiva } from '../components/block/sprint1/revision y restrospectiva/RevisionRestrospectiva';
import { DemostrarValidaSprint } from '../components/block/sprint1/revision y restrospectiva/DemostrarValidaSprint';
import { RetrospectivaDelSprint } from '../components/block/sprint1/revision y restrospectiva/RetrospectivaDelSprint';
import { Lanzamiento } from '../components/block/sprint1/lanzamiento/Lanzamiento';
import { EnvioEntregables } from '../components/block/sprint1/lanzamiento/EnvioEntregables';
// ***************************** sprint 2 *******************************************************
import { PlanificacionEstimacion2 } from '../components/block/sprint2/planificacionEstimacion/PlanificacionEstimacion';
import { CrearHistoriaUsuario2 } from '../components/block/sprint2/planificacionEstimacion/CrearHistoriaUsuario';
import { EstimarHistoriaUsuario2 } from '../components/block/sprint2/planificacionEstimacion/EstimarHistoriaUsuario';
import { ComprometerHistoriaUsuario2 } from '../components/block/sprint2/planificacionEstimacion/ComprometerHistoriaUsuario';
import { IdentificarTareas2 } from '../components/block/sprint2/planificacionEstimacion/IdentificarTareas';
import { EstimarTarea2 } from '../components/block/sprint2/planificacionEstimacion/EstimarTarea';
import { CrearSprintBackLog2 } from '../components/block/sprint2/planificacionEstimacion/CrearSprintBackLog';

import { Implementacion2 } from '../components/block/sprint2/implementacion/Implementacion'
import { CrearEntregable2 } from '../components/block/sprint2/implementacion/CrearEntregable';
import { RealizarDailyStandup2 } from '../components/block/sprint2/implementacion/RealizarDailyStandup';
import { RefinamientoDelBacklogPriorizado2 } from '../components/block/sprint2/implementacion/RefinamientoDelBacklogPriorizado';

import { RevisionRestrospectiva2 } from '../components/block/sprint2/revision y restrospectiva/RevisionRestrospectiva';
import { DemostrarValidaSprint2 } from '../components/block/sprint2/revision y restrospectiva/DemostrarValidaSprint';
import { RetrospectivaDelSprint2 } from '../components/block/sprint2/revision y restrospectiva/RetrospectivaDelSprint';

import { Lanzamiento2 } from '../components/block/sprint2/lanzamiento/Lanzamiento';
import { EnvioEntregables2 } from '../components/block/sprint2/lanzamiento/EnvioEntregables';

// ******************************* sprint 3 **************************

import { PlanificacionEstimacion3 } from '../components/block/sprint3/planificacionEstimacion/PlanificacionEstimacion';
import { CrearHistoriaUsuario3 } from '../components/block/sprint3/planificacionEstimacion/CrearHistoriaUsuario';
import { EstimarHistoriaUsuario3 } from '../components/block/sprint3/planificacionEstimacion/EstimarHistoriaUsuario';
import { ComprometerHistoriaUsuario3 } from '../components/block/sprint3/planificacionEstimacion/ComprometerHistoriaUsuario';
import { IdentificarTareas3 } from '../components/block/sprint3/planificacionEstimacion/IdentificarTareas';
import { EstimarTarea3 } from '../components/block/sprint3/planificacionEstimacion/EstimarTarea';
import { CrearSprintBackLog3 } from '../components/block/sprint3/planificacionEstimacion/CrearSprintBackLog';

import { Implementacion3 } from '../components/block/sprint3/implementacion/Implementacion';
import { CrearEntregable3 } from '../components/block/sprint3/implementacion/CrearEntregable';
import { RealizarDailyStandup3 } from '../components/block/sprint3/implementacion/RealizarDailyStandup';
import { RefinamientoDelBacklogPriorizado3 } from '../components/block/sprint3/implementacion/RefinamientoDelBacklogPriorizado';

import { RevisionRestrospectiva3 } from '../components/block/sprint3/revision y restrospectiva/RevisionRestrospectiva';
import { DemostrarValidaSprint3 } from '../components/block/sprint3/revision y restrospectiva/DemostrarValidaSprint';
import { RetrospectivaDelSprint3 } from '../components/block/sprint3/revision y restrospectiva/RetrospectivaDelSprint';

import { Lanzamiento3 } from '../components/block/sprint3/lanzamiento/Lanzamiento';
import { EnvioEntregables3 } from '../components/block/sprint3/lanzamiento/EnvioEntregables';


export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <div>

                <Switch>
                    <Route exact path="/block" component={ BlockScreen } />
                    <Route exact path="/block/inicio" component={ InicioScreen } />
                    <Route exact path="/block/sprint1" component={ Sprint1 } />
                    <Route exact path="/block/sprint2" component={ Sprint2 } />
                    <Route exact path="/block/sprint3" component={ Sprint3 } />
                    <Route exact path="/block/sprint4" component={ Sprint4 } />

                    <Route exact path="/block/vision" component={ VisionDelProyecto } />
                    <Route exact path="/block/scrummaster" component={ IdentificarScrumMaster } />
                    <Route exact path="/block/equiposcrum" component={ IdentificacionEquipoScrum } />
                    <Route exact path="/block/epicas" component={ DesarrolloEpicas } />
                    <Route exact path="/block/backlog" component={ CrearBacklogPriorizado } />
                    <Route exact path="/block/planificacion" component={ PlanificacionDelLanzamiento } />
        {/* *********************** primer Sprint */}
                    <Route exact path="/block/planificacionestimacion" component={ PlanificacionEstimacion } />
                    <Route exact path="/block/crearhistoria" component={ CrearHistoriaUsuario } />
                    <Route exact path="/block/estimarhistorias" component={ EstimarHistoriaUsuario } />
                    <Route exact path="/block/comprometerhistorias" component={ ComprometerHistoriaUsuario } />
                    <Route exact path="/block/identificartareas" component={ IdentificarTareas } />
                    <Route exact path="/block/estimartareas" component={ EstimarTarea } />
                    <Route exact path="/block/crearsprintbacklog" component={ CrearSprintBackLog } />

                    <Route exact path="/block/implementacion" component={ Implementacion } />
                    <Route exact path="/block/crearentregable1" component={ CrearEntregable } />
                    <Route exact path="/block/dailystand1" component={ RealizarDailyStandup } />
                    <Route exact path="/block/refinamiento1" component={ RefinamientoDelBacklogPriorizado } />

                    <Route exact path="/block/revision" component={ RevisionRestrospectiva} />
                    <Route exact path="/block/demostravalidar" component={ DemostrarValidaSprint} />
                    <Route exact path="/block/restrospectiva" component={ RetrospectivaDelSprint } />

                    <Route exact path="/block/lanzamiento" component={ Lanzamiento } />
                    <Route exact path="/block/envioentregables" component={ EnvioEntregables } />

        {/* *********************** Segundo Sprint */}
        <Route exact path="/block/planificacionestimacion2" component={ PlanificacionEstimacion2 } />
        <Route exact path="/block/crearhistoria2" component={ CrearHistoriaUsuario2 } />
        <Route exact path="/block/estimarhistorias2" component={ EstimarHistoriaUsuario2 } />
        <Route exact path="/block/comprometerhistorias2" component={ ComprometerHistoriaUsuario2 } />
        <Route exact path="/block/identificartareas2" component={ IdentificarTareas2 } />
        <Route exact path="/block/estimartareas2" component={ EstimarTarea2 } />
        <Route exact path="/block/crearsprintbacklog2" component={ CrearSprintBackLog2 } />

        <Route exact path="/block/implementacion2" component={ Implementacion2 } />
        <Route exact path="/block/crearentregable2" component={ CrearEntregable2 } />
        <Route exact path="/block/dailystand2" component={ RealizarDailyStandup2 } />
        <Route exact path="/block/refinamiento2" component={ RefinamientoDelBacklogPriorizado2 } />

        <Route exact path="/block/revision2" component={ RevisionRestrospectiva2} />
        <Route exact path="/block/demostravalidar2" component={ DemostrarValidaSprint2} />
        <Route exact path="/block/restrospectiva2" component={ RetrospectivaDelSprint2 } />

        <Route exact path="/block/lanzamiento2" component={ Lanzamiento2 } />
        <Route exact path="/block/envioentregables2" component={ EnvioEntregables2 } />

        {/* ***************************** 3 Sprint */}
        <Route exact path="/block/planificacionestimacion3" component={ PlanificacionEstimacion3 } />
        <Route exact path="/block/crearhistoria3" component={ CrearHistoriaUsuario3 } />
        <Route exact path="/block/estimarhistorias3" component={ EstimarHistoriaUsuario3 } />
        <Route exact path="/block/comprometerhistorias3" component={ ComprometerHistoriaUsuario3 } />
        <Route exact path="/block/identificartareas3" component={ IdentificarTareas3 } />
        <Route exact path="/block/estimartareas3" component={ EstimarTarea3 } />
        <Route exact path="/block/crearsprintbacklog3" component={ CrearSprintBackLog3 } />

        <Route exact path="/block/implementacion3" component={ Implementacion3 } />
        <Route exact path="/block/crearentregable3" component={ CrearEntregable3 } />
        <Route exact path="/block/dailystand3" component={ RealizarDailyStandup3 } />
        <Route exact path="/block/refinamiento3" component={ RefinamientoDelBacklogPriorizado3 } />

        <Route exact path="/block/revision3" component={ RevisionRestrospectiva3} />
        <Route exact path="/block/demostravalidar3" component={ DemostrarValidaSprint3} />
        <Route exact path="/block/restrospectiva3" component={ RetrospectivaDelSprint3 } />

        <Route exact path="/block/lanzamiento3" component={ Lanzamiento3 } />
        <Route exact path="/block/envioentregables3" component={ EnvioEntregables3 } />




                    <Redirect  to="/block"/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}


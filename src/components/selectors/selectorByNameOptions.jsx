import { sprint2Options } from "../../data/sprint2Options";
import { sprint1Options } from "./../../data/sprint1Options";


export const selectorByNameOptions = ( name ) => {


    return sprint1Options.filter( (dato)=> dato.filtro.includes(name) );
}


export const selectorByNameOptionSprint2 = ( name ) => {
    return sprint2Options.filter( (dato) => dato.filtro.includes( name ) );
}




import { sprint1Options } from "./../../data/sprint1Options";


export const selectorByNameOptions = ( name ) => {


    return sprint1Options.filter( (dato)=> dato.filtro.includes(name) );
}






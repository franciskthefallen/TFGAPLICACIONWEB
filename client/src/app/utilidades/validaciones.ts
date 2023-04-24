import { FormControl } from '@angular/forms';


//export const expedienteOrga  : string = 'ORGA+2022+[0-9]{5}';
export const expedienteOrga  : string = 'ORGA2022[0-9]{5}(bis|tris|tetrakis|pentakis|hexakis|heptakis|octakis|nonakis|decakis|undecakis|dodecakis)?';
export const expedienteCnp  : string = 'CNP2022[0-9]{5}(bis|tris|tetrakis|pentakis|hexakis|heptakis|octakis|nonakis|decakis|undecakis|dodecakis)?';
export const listadoProvincia  : string = 'ORGA2022[0-9]{5}(bis|tris|tetrakis|pentakis|hexakis|heptakis|octakis|nonakis|decakis|undecakis|dodecakis)?';
export const  emailPattern          : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const noPuedeSerStrider= (control: FormControl) => {
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === 'strider'){
      return{
        noStrider: true
      }
    }
    console.log(valor);

    return null;
}
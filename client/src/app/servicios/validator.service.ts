import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  //public expedienteOrga  : string = 'ORGA+2022+[0-9]{5}';
  public expedienteOrga  : string = 'ORGA2022[0-9]{5}(bis|tris|tetrakis|pentakis|hexakis|heptakis|octakis|nonakis|decakis|undecakis|dodecakis)?';
  public expedienteCnp  : string = 'CNP2022[0-9]{5}(bis|tris|tetrakis|pentakis|hexakis|heptakis|octakis|nonakis|decakis|undecakis|dodecakis)?';

  constructor() { }
}

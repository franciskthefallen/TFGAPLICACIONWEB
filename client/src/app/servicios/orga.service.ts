import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpedienteORGA } from '../models/ExpedienteORGA';

@Injectable({
  providedIn: 'root'
})
export class OrgaService {

  API_URI = 'http://localhost:3000/api';

  private _categorias : string[] = ['vehiculo', 'TIC', 'semovientes', 'animales', 'armas','joyas'];
  
  //subCategorias
  private _TIC: string[] = ['portatil', 'movil', 'tablet', 'smartwatch', 'sobremesa'];
  private _animales: string[] = ['perro', 'gato', 'tigre', 'leon', 'elefante'];
  
  //listaSubCategorias
  private _armas: string[] = ['marca', 'modelo','numSerie'];
  private _vehiculos: string[] = ['matricula', 'numBas', 'marca', 'modelo', 'version'];

  //listaSubClasificaciones
  private _portatil: string[] = ['marca', 'modelo', 'Sistema Operativo', 'S/N', 'Procesador'];
  private _movil: string[] = ['marca', 'modelo', 'IMEI', 'S/N', 'Ntelefono'];
  private _perro: string[] = ['raza', 'sexo', 'nombre', 'NombreDueño', 'NCHIP'];
  


  /* agregarVehiculo(vehiculo: string) {
    this._vehiculos.subscribe(
      vehiculo 
    )
    this.clientes$.next(this.clientes);
  } */

  get categorias(): string[]{
    return [ ...this._categorias];
  }


  getsubCategoriaPorCategoria(categoria: string): string[]{
    if( !categoria ){
      return [];
    }
    console.log("categoria: "+categoria);
    if(categoria == ("vehiculo")){
      console.log("lista");
      return this._vehiculos;
    }
    else if(categoria =="armas"){
      console.log("dentroarmac");
      return this._armas;
    }
    else if(categoria =="tic"){
      console.log("dentrotic");
      return this._TIC;
    }
    else if(categoria =="animales"){
      return this._animales;
    }
    else{
      console.log("el else");
      return [];
    }
      
  }

  getsubClasificacionPorSubCategoria(subCategoria: string): string[]{
    if( !subCategoria ){
      return [];
    }
    if(subCategoria =="portatil"){
      return this._portatil;
    }
    else if(subCategoria =="movil"){
      return this._movil;
    }
    else if(subCategoria =="perro"){
      return this._perro;
    }
    else
      return [];
  }

  constructor(private http: HttpClient) { }

  getExpedientesORGA() {
    console.log("getExpedientesORGA:+"+this.http.get(`${this.API_URI}/principal`));
    return this.http.get(`${this.API_URI}/principal`);
  }

  getExpedienteORGA(id: string) {
    return this.http.get(`${this.API_URI}/principal/${id}`);
  }

  deleteExpedienteORGA(id: string) {
    return this.http.delete(`${this.API_URI}/principal/${id}`);
  }

  saveExpedienteORGA(expediente_orga: ExpedienteORGA) {
    return this.http.post(`${this.API_URI}/principal`, expediente_orga);
  }

  updateExpedienteORGA(id: string|number, updatedExpedienteORGA: ExpedienteORGA): Observable<ExpedienteORGA> {
    return this.http.put(`${this.API_URI}/principal/${id}`, updatedExpedienteORGA);
  }
  //constructor() {
    /* const _vehiculos = of('Hello', 'World');
    _vehiculos.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete")) */
   //}
}

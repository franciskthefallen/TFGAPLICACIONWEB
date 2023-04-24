import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { Validaciones } from '../../../shared/validator/validator.service';
//import { expedienteOrga, expedienteCnp } from '../../utilidades/validaciones';
import { FloatLabelType } from '@angular/material/form-field';
import { ThemePalette } from '@angular/material/core';

import { switchMap, tap } from 'rxjs';
import { visitAll } from '@angular/compiler';
import { OrgaService } from 'src/app/servicios/orga.service';
import { expedienteOrga, expedienteCnp } from 'src/app/utilidades/validaciones';

interface Categorias {
  id: number;
  name: string;
}

interface ValorVista {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nuevo-orga',
  templateUrl: './nuevo-orga.component.html',
  styles: [
  ]
})


export class NuevoOrgaComponent implements OnInit {

  provincias: ValorVista[] = [
    { value: 'acoruña', viewValue: 'A Coruña' },
    { value: 'alava', viewValue: 'Álava' },
    { value: 'albacete', viewValue: 'Albacete' },
    { value: 'alicante', viewValue: 'Alicante' },
    { value: 'almeria', viewValue: 'Almería' },
    { value: 'asturias', viewValue: 'Asturias' },
    { value: 'avila', viewValue: 'Ávila' },
    { value: 'badajoz', viewValue: 'Badajoz' },
    { value: 'baleares', viewValue: 'Baleares' },
    { value: 'barcelona', viewValue: 'Barcelona' },
    { value: 'burgos', viewValue: 'Burgos' },
    { value: 'caceres', viewValue: 'Cáceres' },
    { value: 'cadiz', viewValue: 'Cádiz' },
    { value: 'cantabria', viewValue: 'Cantabria' },
    { value: 'castellon', viewValue: 'Castellón' },
    { value: 'ciudadreal', viewValue: 'Ciudad Real' },
    { value: 'cordoba', viewValue: 'Córdoba' },
    { value: 'cuenca', viewValue: 'Cuenca' },
    { value: 'girona', viewValue: 'Girona' },
    { value: 'granada', viewValue: 'Granada' },
    { value: 'guadalajara', viewValue: 'Guadalajara' },
    { value: 'gipuzkoa', viewValue: 'Gipuzkoa' },
    { value: 'huelva', viewValue: 'Huelva' },
    { value: 'huesca', viewValue: 'Huesca' },
    { value: 'jaen', viewValue: 'Jaén' },
    { value: 'larioja', viewValue: 'La Rioja' },
    { value: 'laspalmas', viewValue: 'Las Palmas' },
    { value: 'leon', viewValue: 'León' },
    { value: 'lerida', viewValue: 'Lérida' },
    { value: 'lugo', viewValue: 'Lugo' },
    { value: 'madrid', viewValue: 'Madrid' },
    { value: 'malaga', viewValue: 'Málaga' },
    { value: 'murcia', viewValue: 'Murcia' },
    { value: 'navarra', viewValue: 'Navarra' },
    { value: 'ourense', viewValue: 'Ourense' },
    { value: 'palencia', viewValue: 'Palencia' },
    { value: 'pontevedra', viewValue: 'Pontevedra' },
    { value: 'salamanca', viewValue: 'Salamanca' },
    { value: 'segovia', viewValue: 'Segovia' },
    { value: 'sevilla', viewValue: 'Sevilla' },
    { value: 'soria', viewValue: 'Soria' },
    { value: 'tarragona', viewValue: 'Tarragona' },
    { value: 'santacruzdetenerife', viewValue: 'Santa Cruz de Tenerife' },
    { value: 'teruel', viewValue: 'Teruel' },
    { value: 'toledo', viewValue: 'Toledo' },
    { value: 'valladolid', viewValue: 'Valladolid' },
    { value: 'vizcaya', viewValue: 'Vizcaya' },
    { value: 'zamora', viewValue: 'Zamora' },
    { value: 'zaragoza', viewValue: 'Zaragoza' }
  ];

  estadoExpedientes: ValorVista[] = [
    { value: 'abierto', viewValue: 'Abierto' },
    { value: 'pendiente', viewValue: 'Pendiente' },
    { value: 'resuelto', viewValue: 'Resuelto' },
    { value: 'finalizado', viewValue: 'Finalizado' },
    { value: 'otro', viewValue: 'Otro' }
  ];

  sinos: ValorVista[] = [
    { value: 'si', viewValue: 'Si' },
    { value: 'no', viewValue: 'No' }
  ];

/*   categorias1: ValorVista[] = [
    { value: 'red', viewValue: 'Vehículo' },
    { value: 'warn', viewValue: 'TIC' },
    { value: 'animales', viewValue: 'Animales' },
  ];

  categorias2: ValorVista[] = [
    { value: '1', viewValue: 'Vehícussssssssssslo' },
    { value: '2', viewValue: 'TIasdfasdfC' },
    { value: 'animales', viewValue: 'Animaasdfadsfles' },
  ]; */


/*   subcategoriasVV: ValorVista[] = [
    { value: 'matricula', viewValue: 'Matrículaaaa' },
    { value: 'numBas', viewValue: 'Número de Bastidor' },
    { value: 'marca', viewValue: 'Marca' },
    { value: 'modelo', viewValue: 'Modelo' },
    { value: 'version', viewValue: 'Versión' },
    { value: 'carburante', viewValue: 'Carburante' },
    { value: 'color', viewValue: 'Color' }
  ]; */

 /*  subcategoriaOpcionales: ValorVista[] = [
    { value: 'microchip', viewValue: 'Microchip' },
    { value: 'numSerie', viewValue: 'Número de serie' }
  ]; */


  //nuevoFavorito: FormControl = this.elFormBuilder.control('',Validators.required);

  /* miFormulario: FormGroup= new FormGroup({
    nombre      : new FormControl('RTX 4080ti'),
    precio      : new FormControl(1500),
    existencias : new FormControl(5)
  }) */

  colorControl = new FormControl('');

  //selectores
  categorias: string[] = [];
  subCategorias: string[] = [];
  subClasificaciones: string[] = [];
  listaSubCategorias: string[] = [];
  listaSubClasificaciones: string[] = [];

  cargando: boolean = false;



  formularioOrga: FormGroup = this.elFormBuilder.group({
    numExpOrga: [, [Validators.required, Validators.pattern(expedienteOrga)]],
    juzgado: [, [Validators.required]],
    //provincia: [ ,[Validators.required]],
    procedimientoDiligencias: [, [Validators.required, Validators.min(1)]],
    grupo: [, [Validators.required]],
    estadoExpediente: [, [Validators.required]],
    observaciones: [],
    numExpCnp: [, [Validators.required, Validators.pattern(expedienteCnp)]],

    categoria: ['', Validators.required],
    subCategoria: ['', Validators.required],
    subClasificacion: ['', Validators.required],

    matriculaVehiculo: [, [Validators.required]],
    numBastidorVehiculo: [, [Validators.required]],
    marcaVehiculo: [, [Validators.required]],
    modeloVehiculo: [, [Validators.required]],
    versionVehiculo: [, [Validators.required]],
    carburanteVehiculo: [, [Validators.required]],
    colorVehiculo: [, [Validators.required]],

  })

  constructor(private elFormBuilder: FormBuilder,
    private orgaService: OrgaService) { }

  ngOnInit(): void {
    this.categorias = this.orgaService.categorias;


    this.formularioOrga.get('categoria')?.valueChanges
      .pipe(
        tap((_) => {
          this.formularioOrga.get('subCategoria')?.reset('');
          this.subCategorias=[];
          this.listaSubCategorias=[];
          this.subClasificaciones=[];
          this.listaSubClasificaciones=[];
          this.cargando = true;
        }),
        
    //if(this.ca == ("vehiculo" || "armas")){}
    switchMap(categoria => this.orgaService.getsubCategoriaPorCategoria(categoria))
      )
      .subscribe(subCategorias => {
        console.log("entra en subscribe de subclasi:"+subCategorias);
      this.subCategorias.push(subCategorias);
      this.cargando = false;
    }
    )

    console.log("11111111111subCategorias:"+this.subCategorias);
    console.log("22222222222222Categorias:"+this.categorias);

    this.formularioOrga.get('subCategoria')?.valueChanges
         .pipe(
           tap( () => {
            this.subClasificaciones = [];
            this.formularioOrga.get('subClasificacion')?.reset('');
            this.cargando= true;
          }), 
          switchMap(subCategoria => this.orgaService.getsubClasificacionPorSubCategoria(subCategoria)),
        ) 
        .subscribe( subClasificaciones => {
          //this.fronteras=pais?.borders || [];
          //console.log("paises:"+paises);
          this.subClasificaciones.push(subClasificaciones);
          this.cargando= false;
        })


  }

  campoEsValido(campo: string) {
    return this.formularioOrga.controls[campo].errors
      && this.formularioOrga.controls[campo].touched
  }

  guardar() {

  }


}


/* import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-nuevo-orga',
  templateUrl: './nuevo-orga.component.html',
  styleUrls: ['./nuevo-orga.component.css']
})
export class NuevoOrgaComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      )
  }

}
 */
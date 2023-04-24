import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles:[
    `
    li{cursor: pointer}
    `
  ]
})
export class HeaderComponent {
  orgaMenu: MenuItem[] = [
    {
      texto: 'Buscar',
      ruta: './buscarOrga'
    },
    {
      texto: 'Nuevo',
      ruta: './nuevoOrga'
    },
    {
      texto: 'Editar',
      ruta: './editarOrga'
    },
    {
      texto: 'Eliminar',
      ruta: '/eliminarOrga'
    },
    {
      texto: 'Listado',
      ruta: './listadoOrga'
    }


  ]
}

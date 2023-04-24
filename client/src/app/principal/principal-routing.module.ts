import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoOrgaComponent } from './components/listado-orga/listado-orga.component';
import { EditarOrgaComponent } from './components/editar-orga/editar-orga.component';
import { EliminarOrgaComponent } from './components/eliminar-orga/eliminar-orga.component';
import { NuevoOrgaComponent } from './components/nuevo-orga/nuevo-orga.component';
import { BuscarOrgaComponent } from './components/buscar-orga/buscar-orga.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: ListadoOrgaComponent },
      { path: 'buscarOrga', component: BuscarOrgaComponent },
      { path: 'editarOrga', component: EditarOrgaComponent },
      { path: 'editarOrga/:id', component: EditarOrgaComponent },
      { path: 'eliminarOrga', component: EliminarOrgaComponent },
      { path: 'nuevoOrga', component: NuevoOrgaComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],//imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
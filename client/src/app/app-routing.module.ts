import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarOrgaComponent } from './principal/components/buscar-orga/buscar-orga.component';
import { EditarOrgaComponent } from './principal/components/editar-orga/editar-orga.component';
import { EliminarOrgaComponent } from './principal/components/eliminar-orga/eliminar-orga.component';
import { ListadoOrgaComponent } from './principal/components/listado-orga/listado-orga.component';
import { NuevoOrgaComponent } from './principal/components/nuevo-orga/nuevo-orga.component';

const routes: Routes = [
  
      { path: 'home', component: ListadoOrgaComponent },
      { path: 'buscarOrga', component: BuscarOrgaComponent },
      { path: 'editarOrga', component: EditarOrgaComponent },
      { path: 'editarOrga/:id', component: EditarOrgaComponent },
      { path: 'eliminarOrga', component: EliminarOrgaComponent },
      { path: 'nuevoOrga', component: NuevoOrgaComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
   /*  path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m=> m.PrincipalModule) */
  
/*   ,
  {
     path: '**',
    redirectTo: 'principal' 
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],//imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
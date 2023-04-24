import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';

import { PrincipalRoutingModule } from './principal-routing.module';
import { BuscarOrgaComponent } from './components/buscar-orga/buscar-orga.component';
import { ListadoOrgaComponent } from './components/listado-orga/listado-orga.component';
import { NuevoOrgaComponent } from './components/nuevo-orga/nuevo-orga.component';
import { EditarOrgaComponent } from './components/editar-orga/editar-orga.component';
import { EliminarOrgaComponent } from './components/eliminar-orga/eliminar-orga.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    BuscarOrgaComponent,
    ListadoOrgaComponent,
    NuevoOrgaComponent,
    EditarOrgaComponent,
    EliminarOrgaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }

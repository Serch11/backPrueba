import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './component/editar/editar.component';
import { EstantesComponent } from './component/estantes/estantes.component';
import { MostrarEstanteComponent } from './component/mostrar-estante/mostrar-estante.component';

const routes: Routes = [
  { path: '', component: EstantesComponent },
  { path: 'listadoEstantes', component: EditarComponent},
  {path:"mostrarEstantes/:id",component:MostrarEstanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

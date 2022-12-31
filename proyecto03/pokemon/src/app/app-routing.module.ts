import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';
import { HomeComponent } from './home/home.component';
import { EspecificacionesComponent } from './especificaciones/especificaciones.component';
import { EvolutionComponent } from './evolution/evolution.component';

const routes: Routes = [
  {path:"detalle/:id",component: DetallePokemonComponent},
  {path:"especificaciones/:id",component: EspecificacionesComponent},
  {path:"evolution/:id",component:EvolutionComponent},
  {path:"home",component: HomeComponent},
  {path:"**",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

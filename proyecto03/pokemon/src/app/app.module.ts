import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { HttpClientModule } from '@angular/common/http';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';
import { HomeComponent } from './home/home.component';
import { EspecificacionesComponent } from './especificaciones/especificaciones.component';
import { EvolutionComponent } from './evolution/evolution.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    DetallePokemonComponent,
    HomeComponent,
    EspecificacionesComponent,
    EvolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

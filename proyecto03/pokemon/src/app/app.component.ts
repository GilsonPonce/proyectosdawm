import { Component } from '@angular/core';
import { GetPokemonService } from './servicios/get-pokemon.service'; 
import { GetAllPokemonService } from './servicios/get-all-pokemon.service';
import { Pokemon } from './interfaz/pokemon';
import { Pokemones, Result } from './interfaz/pokemones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';
  
}

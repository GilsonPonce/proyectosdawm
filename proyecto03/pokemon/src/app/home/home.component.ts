import { Component } from '@angular/core';
import { Result } from '../interfaz/pokemones';
import { GetAllPokemonService } from '../servicios/get-all-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pokemones: Result[] = [];
  constructor(private GetAllPokemonService: GetAllPokemonService  ) {
    GetAllPokemonService .obtenerDatos().subscribe(data => {
      this.pokemones = data.results
    })
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonService } from '../servicios/get-pokemon.service';
import { Result } from '../interfaz/pokemones';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent {
  pokemonid: number = 0;
  urlevol:string = "";
  pokemones: Result[] = [];

  constructor(private route: ActivatedRoute, private servicePokemon: GetPokemonService) {
    this.route.params.subscribe(params => {
      this.pokemonid = params['id'];
    });
    this.urlevol = localStorage.getItem("urlevolution") || "";
  }

  ngOnInit(): void {
    this.servicePokemon.getPokemonEvolution(this.urlevol).subscribe(data => {
      let objstart = data.chain.evolves_to[0];
      while (objstart != null || objstart != undefined) {
        let id = objstart.species.url.split("/")[6];
        this.pokemones.push({
          ...objstart.species,
          url: " https://pokeapi.co/api/v2/pokemon/" + id
        });
        objstart = objstart['evolves_to'][0];
      }

    });
  }
}

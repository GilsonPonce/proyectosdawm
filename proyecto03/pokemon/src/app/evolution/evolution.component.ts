import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonService } from '../servicios/get-pokemon.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent {
  pokemonid: number = 0;
  name:string = "";
  constructor(private route: ActivatedRoute, private servicePokemon:GetPokemonService){
    this.route.params.subscribe(params => {
      this.pokemonid = params['id'];
    });
  }

  ngOnInit(): void{
    
  }
}

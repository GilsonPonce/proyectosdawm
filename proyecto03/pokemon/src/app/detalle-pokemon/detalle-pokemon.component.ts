import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonService } from '../servicios/get-pokemon.service';
import { Pokemon } from '../interfaz/pokemon';
import { Location } from '@angular/common'

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent {
  pokemonid: number = 0;
  name:string = '';
  image:string = '';
  experience:number = 0;
  description:string = '';

  constructor(private route: ActivatedRoute,private location: Location, private servicePokemon:GetPokemonService){
    this.route.params.subscribe(params => {
      this.pokemonid = params['id'];
    });
  }

  ngOnInit(): void{
    this.servicePokemon.getPokemonId(this.pokemonid).subscribe(data =>{
      this.name = data.name.toUpperCase();
      this.image = data.sprites.other?.dream_world.front_default || "";
      this.experience = data.base_experience;
    });

    this.servicePokemon.getPokemonSpecies(this.pokemonid).subscribe(data =>{
      data.flavor_text_entries.map(obj => {
        if(obj.version.name == "omega-ruby" && obj.language.name == "es"){
          this.description = obj.flavor_text;
        }
      });
    });
  }

  back(): void {
    this.location.back();
  }

}

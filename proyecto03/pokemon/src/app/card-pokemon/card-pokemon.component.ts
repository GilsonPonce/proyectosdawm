import { Component, Input } from '@angular/core';
import { Poke } from '../interfaz/poke';
import { GetPokemonService } from '../servicios/get-pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent {
  @Input() poke!: Poke;
  image: string = '';
  id: number = 0;

  constructor(private getPokemon:GetPokemonService){
    
  }

  ngOnInit(): void{
    this.getPokemon.obtenerDatos(this.poke.url).subscribe(data => {
      this.image = data.sprites.other?.dream_world.front_default || "";
      this.id = data.id;
    })
  }

}

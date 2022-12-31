import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonService } from '../servicios/get-pokemon.service';

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.component.html',
  styleUrls: ['./especificaciones.component.css']
})
export class EspecificacionesComponent {
  pokemonid: number = 0;
  altura: string = "";
  peso: string = "";
  name: string = "";
  habilidad: string[] = [];
  categoria: string[] = [];
  tipo: string[] = [];
  debilidad: string[] = [];
  constructor(private route: ActivatedRoute, private servicePokemon:GetPokemonService){
    this.route.params.subscribe(params => {
      this.pokemonid = params['id'];
    });
  }

  ngOnInit(): void{
    let habilidades:string[] = [];
    let item:string[] = [];
    this.servicePokemon.getPokemonId(this.pokemonid).subscribe(data =>{
      this.altura = data.height+" m";
      this.peso = data.weight+" kg";
      this.name = data.name;
      data.abilities.map(hab => {
        habilidades.push(hab.ability.url);
      });
      data.held_items.map(ite => {
        item.push(ite.item.url);
      })
    });
    habilidades.map(habi => {
      console.log(habi);
      this.servicePokemon.getPokemonAbility(habi).subscribe(data => {
        data.names.map(na => {
          if(na.language.name == "es"){
            this.habilidad.push(na.name);
          }
        })
      });
    });
    item.map(ite => {
      this.servicePokemon.getPokemonItem(ite).subscribe(data => {
        this.categoria.push(data.category.name);
      })
    })
  }

}

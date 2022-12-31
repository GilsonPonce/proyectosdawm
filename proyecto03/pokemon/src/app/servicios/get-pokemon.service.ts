import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemones } from '../interfaz/pokemones';
import { Pokemon } from '../interfaz/pokemon';
import { Pokespecie } from '../interfaz/pokespecie';
import { Pokeability } from '../interfaz/pokeability';
import { Pokeitem } from '../interfaz/pokeitem';
import { Poketype } from '../interfaz/poketype';
import { Pokevolution } from '../interfaz/pokevolution';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  constructor(private http: HttpClient) { }
  obtenerDatos(urlPokemon:string) {
    return this.http.get<Pokemon>(urlPokemon);
  }
  getPokemonId(pokemonId:number){
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+pokemonId+"/");
  }
  getPokemonSpecies(pokemonId:number){
    return this.http.get<Pokespecie>("https://pokeapi.co/api/v2/pokemon-species/"+pokemonId+"/");
  }
  getPokemonAbility(urlPokemon:string){
    return this.http.get<Pokeability>(urlPokemon);
  }
  getPokemonItem(urlPokemon:string){
    return this.http.get<Pokeitem>(urlPokemon);
  }
  getPokemonType(urlPokemon:string){
    return this.http.get<Poketype>(urlPokemon);
  }
  getPokemonEvolution(urlPokemon:string){
    return this.http.get<Pokevolution>(urlPokemon);
  }
}

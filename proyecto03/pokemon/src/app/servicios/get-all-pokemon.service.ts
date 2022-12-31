import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemones } from '../interfaz/pokemones';

@Injectable({
  providedIn: 'root'
})
export class GetAllPokemonService {

  constructor(private http: HttpClient) { }
  obtenerDatos() {
    return this.http.get<Pokemones>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
  }
}
